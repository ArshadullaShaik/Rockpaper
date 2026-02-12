const score ={
    wins: 0,
    losses:0,
    ties: 0,
    };
function rock(){
        const pcmove = pcplay();  
         let result = '';
            if(pcmove==='rock'){
                result = 'tie';}
            else if(pcmove==='scissors'){
                result = 'you won!!!!';
            }
            else{
                result = 'you lost!';
            }
             updatescore(result);
             alert(`you,ve picked rock and sys choose ${pcmove}. ${result}
                wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);}   
function sci(){
    const pcmove = pcplay();  
         let result = '';
            if(pcmove==='scissors'){
                result = 'tie';}
            else if(pcmove==='paper'){
                result = 'you lost!';}
            else{
                result = 'you won!!!!';
            }
            updatescore(result);
             alert(`you,ve picked scissors and sys choose ${pcmove}. ${result}
                wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);}   
function pap(){
        const pcmove = pcplay();  
         let result = '';
            if(pcmove==='paper'){
                result = 'tie';}
            else if(pcmove==='scissors'){
                result = 'you lost!';
            }
            else{
                result = 'you won!!!!';
            }
             updatescore(result);
             alert(`you,ve picked paper and sys choose ${pcmove}. ${result}
                wins: ${score.wins}, losses: ${score.losses}, Ties: ${score.ties}`);}   

function pcplay(){
                const Random = Math.random();
            let pcmove = '';
            
            if(Random<1/3){
                pcmove='rock';}
            else if(Random<2/3){
                pcmove='paper';
            }
            else{
               pcmove='scissors';
            };
            return pcmove;
            }
    function updatescore(result){
                if(result==='you won!!!!'){
                    score.wins+=1;
                }else if(result==='tie'){
                    score.ties+=1;
                }else{
                    score.losses+=1;
                }
            }
            function resetscore(){
                score.wins=0;
                score.ties=0;
                score.losses=0;
                alert('score has been reset!');
            }








                ///if(pcmove=='paper'){
                    //result = 'you lost';}
                   /// else{
                      ///  result ='you lost'
                   ///}
               
                ////if(pcmove==='paper'){
               ///// result = 'you won';
                ////if(pcmove=='rock'){
                   /* result = 'you lost';}
                    else{
                        result ='you lost'
                    }
                alert(`you,ve picked paper and sys choose ${pcmove} ${result}`);}         
                if(pcmove==='Scissors'){
                result = 'you won';
                if(pcmove=='paper'){
                    result = 'you lost';}
                    else{
                        result ='you lost'
                    }
                alert(`you,ve picked Scissors and sys choose ${pcmove} ${result}`);}      
             }*/
                    