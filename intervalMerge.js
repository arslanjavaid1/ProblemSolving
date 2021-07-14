let mergeIntervals = (meetings) => {
    if(meetings.length === 0) return []; 
    let finalMeetingsList = Array();
    let max = -Infinity;
    meetings.sort((a,b) => {
        return a.startTime - b.startTime;
    })
    finalMeetingsList.push(meetings[0]);
    for(let i = 1; i < meetings.length; i++) {
        let startMeeting = meetings[i];
        let endMeeting = finalMeetingsList[finalMeetingsList.length - 1];
        if(startMeeting.startTime <= endMeeting.endTime) {
            endMeeting.endTime = Math.max(startMeeting.endTime, endMeeting.endTime);
        } else {
            finalMeetingsList.push(startMeeting)
        }
    }
    return finalMeetingsList;
}

const meetings = [
    { startTime: 4, endTime: 8 },
    { startTime: 3, endTime: 5 },
    { startTime: 0, endTime: 1 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
]

console.log(mergeIntervals(meetings))