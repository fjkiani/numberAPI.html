//     $(() => {
//         $('form').on('submit', (event) =>{
//             event.preventDefault();

//             const userInput = $('input[type=text]').val();
    
//     $.ajax({
//           url:'http://numbersapi.com/' + userInput +'/year?write&fragment' 
//     }).then(
//           (data)=>{
//             $('#fact').html(document.write);

//           },
//            ()=>{
//             console.log('bad request');
//           }
//     );
//     })
//     })