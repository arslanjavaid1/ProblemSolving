/**
 * @param {string[]} source
 * @return {string[]}
 */
 var removeComments = function(source) {
    let ans = [];
    let block = false;
    let slash = "/";
    let l = "";
    
    for (line of source) {
        if (!block) l = "";
        
        for (let i=0; i<line.length; i++) {
            if (block) {
                if (line[i] == "*" && line[i+1] == slash) {
                    block = false;
                    i++;
                    continue;
                }
            }
            else {
                if (line[i] == slash) {
                    if (line[i+1] == slash) {
                        break;
                    }
                    else if (line[i+1] == "*") {
                        block = true;
                        i++;
                        continue;
                    } 
                }
                l += line[i];
            }
        }
        if (!block && l.length > 0) ans.push(l);
    }
    return ans;
};
let source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"];
source = ["struct Node{", "    /*/ declare members;/**/", "    int size;", "    /**/int val;", "};"]
source = ["void func(int k) {", "// this function does nothing /*", "   k = k*2/4;", "   k = k/2;*/", "}"]
source = ["main() {", "  Node* p;", "  /* declare a Node", "  /*float f = 2.0", "   p->val = f;", "   /**/", "   p->val = 1;", "   //*/ cout << success;*/", "}", " "]
console.log(removeComments(source));