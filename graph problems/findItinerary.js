/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
 function makePath (location, map, path, counter, target) {
    if (counter === target) return path;
    const destinations = map.get(location);
    if (destinations) {
      for (let i = 0; i < destinations.length; i++) {
        const [destination] = destinations.splice(i, 1);
        const gotPath = makePath(destination, map, [...path, destination], counter + 1, target);
        if (gotPath) return gotPath;
        destinations.splice(i, 0, destination);
      }
    }
    return null;
  }


  function findItinerary (tickets) {
    tickets.sort((a,b) => a[1] > b[1] ? 1 : -1);
    const map = new Map();
    let target = 0;
    for (const [origin, destination] of tickets) {
      const curr = map.get(origin);
      target++;
      if (!curr) map.set(origin, [destination]);
      else map.set(origin, [...(map.get(origin) || []), destination]);
    }
    return makePath('JFK', map, ['JFK'], 0, target);
  }
