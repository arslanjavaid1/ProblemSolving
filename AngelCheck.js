var angleClock = function(hour, minutes) {
    let hourAngle = (hour % 12)  * 30 + minutes * 0.5;
    // hour-hand rotates 30 degrees per hour and 0.5 degrees per minute
    let minuteAngle = minutes * 6;
    // minute-hand rotates 6 degrees Per minute
    
    let angle1 = Math.abs(hourAngle - minuteAngle);
    let angle2 = 360 - angle1;
    
    return Math.min(angle1, angle2);
    // Time Complexity: O(1)
    // Input: hour = 12, minutes = 30
    // Output: 165

    // Space Complexity: O(1)
};