/**#####################################
  * Sets up server-side HTML environment
  */

let chords1= [];
let chords2= [];
var modulationSequence= [];

function doGet() {
  return HtmlService.createHtmlOutputFromFile('../ModulationEquation')
                    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

/**#####################################
  * Gets a value from server-side input. 
  * Sends it to updateNumber to be updated.
  * Result will be returned server-side.
  *
  * @param {string} element - number as text from server-side
  * @return {string} contains evaluated number and test.
  */
function getNumberFromWebAPP(element){

  //Just a quick proof that the returned number value will be a text. Remove on production.
  console.log(`Returned number is: ${element}`,typeof element);
  
  let num = parseInt(element); //Change text of num to number.
  
  //If the parsed number is a number, return calculated number otherwise return error.
  if(Number.isInteger(num)){
      return updateNumber_(num);
  };
  return `<em style='color:red'> You didn't input a number!`;
};

/**#####################################
  * This function is an example of a location you can update your value in.
  *
  * @param {num} num - number from getNumberFromWebAPP()
  * @return {num} contains evaluated number.
  */
function updateNumber_(num){
  return num + num;
};

function pcToName(chord){
    let theNotes=Array.from({ length: 4 }, () => Array.from({ length: 1 }, () => false));;
  
  for(var i=0;i<chord.length;i++)
  {
    //Logger.log(chord[i]);
    
    switch(chord[i]){
        
        case 0:
            theNotes[i]='C ';
            break;
        
        case 1:
            theNotes[i]='C#';
            break;
    
        case 2:
            theNotes[i]='D ';
            break;
            
        case 3:
            theNotes[i]='D#';
            break;
            
        case 4:
            theNotes[i]='E ';
            break;
        case 5:
            theNotes[i]='F ';
            break;
        case 6:
            theNotes[i]='F#';
            break;
        case 7:
            theNotes[i]='G ';
            break;
        case 8:
            theNotes[i]='G#';
            break;
        case 9:
            theNotes[i]='A ';
            break;
        case 10:
            theNotes[i]='A#';
            break;
        case 11:
            theNotes[i]='B ';
            break;
            
        default:
            theNotes[i]='Z ';
            
        }
    }
    return theNotes;
};

function octave(tonicNote)
{
    if(tonicNote>11)
    {
        tonicNote-=12;
    }
    else if(tonicNote<0)
    {
        tonicNote+=12;
    }
    
    return tonicNote;
}

function createChords(tonicNote, mode){
  
  //var chords= [7][4];
  var chords = Array.from({ length: 7 }, () => Array.from({ length: 4 }, () => false));
  if(mode=="Major")
  {
    for(var i=0;i<7;i++)
    {
        if(i==0 || i==3 || i==4)
        {
          chords[i][0]=tonicNote;
          chords[i][1]=octave(tonicNote+4);
          chords[i][2]=octave(tonicNote+7);
          chords[i][3]=tonicNote;
        }

        else if(i==1 || i==2 || i==5)
        {
           chords[i][0]=tonicNote;
           chords[i][1]=octave(tonicNote+3);
           chords[i][2]=octave(tonicNote+7);
           chords[i][3]=tonicNote;
        }

            
        else if(i==6)
        {
            chords[i][0]=tonicNote;
            chords[i][1]=octave(tonicNote+3);
            chords[i][2]=octave(tonicNote+6);
            chords[i][3]=tonicNote;
        }

        if(i==2)
        {
            tonicNote++;
        }
        else
        {
            tonicNote=tonicNote+2;
        }

        tonicNote=octave(tonicNote);
    } 
  }
  
    else if(mode=="Minor")
  {
    for(var i=0;i<7;i++)
    {
        if(i==0 || i==3)
        {
          chords[i][0]=tonicNote
          chords[i][1]=octave(tonicNote+3);
          chords[i][2]=octave(tonicNote+7);
          chords[i][3]=tonicNote;
        }

        else if(i==1 || i==6)
        {
           chords[i][0]=tonicNote;
           chords[i][1]=octave(tonicNote+3);
           chords[i][2]=octave(tonicNote+6);
           chords[i][3]=tonicNote;
        }

            
        else if(i==2 || i==4 || i==5)
        {
            chords[i][0]=tonicNote;
            chords[i][1]=octave(tonicNote+4);
            chords[i][2]=octave(tonicNote+7);
            chords[i][3]=tonicNote;
        }

        if(i==1 || i==4)
        {
            tonicNote++;
        }
        else if(i==5)
        {
            tonicNote=tonicNote+3;
        }
        else
        {
          tonicNote=tonicNote+2;
        }

        tonicNote=octave(tonicNote);
    } 
  }
  
  return chords;
}

function pivotChord(chords1,chords2)
{
    var bestChoice=100;
    
    for(var h=6;h>=0;h--)
    {
        
        for(var i=1;i<7;i++)
        {
            var identical=0;
            for(var j=0;j<3;j++)
            {
                if(chords1.notes[h][j]==chords2.notes[i][j])
                    identical++;
                
            }
            //if the chords match and the chord is a subdominant in key 2 return the pivot chord
            if(identical==3 && (chords2.notes[i][0]==chords2.notes[0][0]+5 || chords2.notes[i][1]==chords2.notes[0][0]+5))
            {
                //return chords1.notes[h][0];
                return h;
            }
            else if(identical==3)
            {
                bestChoice=h;
            }
        }
    }
    return bestChoice;
}

function diminishedChord(tonicNote){
  var fullyDiminished=[octave(tonicNote-1),octave(tonicNote+2),octave(tonicNote+5),octave(tonicNote+8)];
  return fullyDiminished;
}

function germanChord(tonicNote){
  let germanAugmented=[octave(tonicNote-4),tonicNote,octave(tonicNote+3),octave(tonicNote+6)];
  return germanAugmented;
}

function modulationEquation(Key1,Key1Accidental,Key1Mode,Key2,Key2Accidental,Key2Mode){
 
 var tonicNote1= octave(parseInt(Key1)+parseInt(Key1Accidental));
 var tonicNote2= octave(parseInt(Key2)+parseInt(Key2Accidental));
 
 var chords1= createChords(tonicNote1,Key1Mode); 
 var chords2= createChords(tonicNote2,Key2Mode);
 
  

  
 if(octave(tonicNote2-tonicNote1)==3 || octave(tonicNote2-tonicNote1)==6 || octave(tonicNote2-tonicNote1)==9)
 {
   modulationSequence.push(pcToName(chords1[0]));
   modulationSequence.push(pcToName(diminishedChord(tonicNote1)));
   modulationSequence.push(pcToName(chords2[0]));
   
 }
  
  else if(octave(tonicNote2-tonicNote1)==1)
 {
   modulationSequence.push(pcToName(chords1[0]));
   modulationSequence.push(pcToName(germanChord(tonicNote1)));
   modulationSequence.push(pcToName(chords2[0]));
 }
  
 else if(octave(tonicNote2-tonicNote1)==11)
 {
   modulationSequence.push(pcToName(chords1[0]));
   modulationSequence.push(pcToName(germanChord(tonicNote2)));
   modulationSequence.push(pcToName(chords2[4]));
   modulationSequence.push(pcToName(chords2[0]));
 }
  
 else
 {
   //modulationSequence.push(chords1[0]);
   //modulationSequence.push(chords2[0]);
 }
  
 
   return modulationSequence;
}
