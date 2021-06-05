function mergeRanges(meetings) {
      const meetingsCopy = JSON.parse(JSON.stringify(meetings));
      const sortedMeetings = meetingsCopy.sort((a,b) => {
          return a.startTime - b.startTime; 
      });
      const mergedMeetings = [sortedMeetings[0]];
      for(let i  = 1; i < sortedMeetings.length; i++) {
          const currentMeeting = sortedMeetings[i];
          const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
          if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
              lastMergedMeeting.endTime = Math.max (lastMergedMeeting.endTime, currentMeeting.endTime);
            } else {
                mergedMeetings.push(currentMeeting);
            }
    }
    return mergedMeetings
  }
  
  
  //actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }]);
  //let actual = mergeRanges([{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }]);
  actual = mergeRanges([
    { startTime: 1, endTime: 4 },
    { startTime: 2, endTime: 5 },
    { startTime: 5, endTime: 8 },
  ]);
  console.log(actual);
    