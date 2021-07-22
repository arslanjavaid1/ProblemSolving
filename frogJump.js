const canCross = stones => {
    const dp = Array.from({ length: stones.length }, _ => [] )
    const stoneToIndex = {}
    const end = stones[ stones.length - 1 ]
    const jump = ( s, k ) => {
        if ( s === end ) return true
        
        let i = stoneToIndex[ s ]
        if ( k < 1 || end < s || isNaN( i ) ) return false

        if ( 'undefined' === typeof dp[ i ][ k ] ) {
            dp[ i ][ k ] = jump( s + k + 1, k + 1 ) || jump( s + k, k ) || jump( s + k - 1, k - 1 )
        }

        return dp[ i ][ k ]
    }
    
    stones.forEach( ( s, i ) => stoneToIndex[ s ] = i )
    
    return jump( 1, 1 )
}