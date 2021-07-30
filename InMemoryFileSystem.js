// simple storage class to contain the meta.
class Storage {
    constructor (name) {
        this.name = name;
    }
}

// Directories.
class Dir extends Storage {
    constructor (name) {
        super(name);
        this.contents = {};
    }
    
    get list() {
        return Object.keys(this.contents).sort();
    }
    
    add(thing) {
        this.contents[thing.name] = thing;
    }
}

// Files.
class File extends Storage {
    constructor (name) {
        super(name);
        this.contents = '';
    }
    
    get list() {
        return [this.name];
    }
     
    add(thing) {
        this.contents += thing;
        return this.contents;
    }
}

// the actual filesystem.
class FileSystem {
    constructor() {
        this._separator = '/';
        this._fp = {};
        this._fs = {
            [this._separator]: new Dir(this._separator)
        };
        this._root = this._fs[this._separator];
    }
    
    /**
     * Normalizes the path to access, i.e. removing or trailing '/'
     * @param {string} path
     * @returns {Array} of directories in order.
     */
    _normalizePath(path) {
        let newPath = path;
        if(newPath.startsWith(this._separator)) {
            newPath = newPath.substring(1);
        }
        if (newPath.endsWith(this._separator)) {
            newPath = newPath.substring(0, dirs.length - 1);
        }
        return newPath.split(this._separator);
    }

    /**
     * Traverse and return the last item, also cache file pointers.
     * @param {string} path
     * @return {File|Dir}
     */
    _traverse(path) {
        if (!(path in this._fp)) {
            const nPath = this._normalizePath(path);
            let item = this._root;
            nPath.forEach(p => {
                item = item.contents[p];
            });
            this._fp[path] = item;
        }
        return this._fp[path] || this._root;
    }

    /**
     * @param {string} path
     * @return {string[]}
     */
    ls(path) {
        return this._traverse(path).list;
    }
    
    /** 
     * @param {string} path
     * @return {void}
     */
    mkdir(path) {
        const nPath = this._normalizePath(path);
        let traverse = this._root;
        nPath.forEach(p => {
            if (!(p in traverse.contents)) {
                traverse.add(new Dir(p));
            }
            traverse = traverse.contents[p];
        });
        this._fp[path] = traverse;
    }
    
    /** 
     * @param {string} filePath 
     * @param {string} content
     * @return {void}
     */
    addContentToFile(filePath, content) {
        const dir = this._normalizePath(filePath);
        const fileName = dir.pop();
        let parentDir = this._traverse(dir.join('/'));
        if (!(fileName in parentDir.contents)) {
            parentDir.add(new File(fileName));
        }
        const file = parentDir.contents[fileName];
        file.add(content);
    }

    /** 
     * @param {string} filePath
     * @return {string}
     */
    readContentFromFile(filePath) {
        return this._traverse(filePath).contents;
    }
}