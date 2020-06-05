/*
  
let incorrect_count=0, correct_count=0, total_score=0, user_ans, results, i;
const POINTS = 50;

//ROUND 1: ADD ROUND
for (i=1; i <= 4; i++) //i represents levels and iterations 
{
    if(incorrect_count==4)
    {
        break;
    } //Without this block, getting 4 wrong answers will still allow you to continue into another level of this round
    
    //Ensure randomly generated numbers do not repeat
    let num1 = 1 + Math.floor(Math.random()*25);
    let num2 = 1 + Math.floor(Math.random()*9);
    
    let correct_ans = num1 + num2;
    let wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

    //Randomise the 'A or B' choices
    let random_num = 1 + Math.floor(Math.random()*2);
    let ans_choices;
            
    if(random_num == 1)
    {
        ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
    }

    else
    {
        ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
    }

    user_ans = prompt(`${NAME_1} you are on Round 1, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}+${num2}: \n${ans_choices}`);
    
    if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer
    {
        total_score+=POINTS;
        correct_count++;
        alert(`Score: ${total_score}`);
    }

    else if(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a") //Incorrect answer
    {
        do 
        {
            total_score-=POINTS;
            incorrect_count++;

            if(total_score < 0) //Maintain a minimum possible score of 0
            {
                total_score = 0;
            }
            
            alert(`Score: ${total_score}`);
            
            if(incorrect_count==4)
            {
                alert(`Sorry ${NAME_1}, you have used all of your chances`);
                break;
            }
            
            //Same level, new questions loops
            num1 = 1 + Math.floor(Math.random()*25);
            num2 = 1 + Math.floor(Math.random()*9);
            
            correct_ans = num1 + num2;
            wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

            random_num = 1 + Math.floor(Math.random()*2);
                
            if(random_num == 1)
            {
                ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
            }

            else
            {
                ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
            }
            
            user_ans = prompt(`${NAME_1} you are on Round 1, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}+${num2}: \n${ans_choices}`);    

            if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer (second chance)
            {
                total_score+=POINTS;
                correct_count++;
                alert(`Score: ${total_score}`);
            }
            
            if(incorrect_count==4)
            {
                alert(`Sorry ${NAME_1}, you have used all of your chances`);
                break;
            }
        } while(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a"); //End loop when answer is correct
    }
}

//ROUND 2: SUBTRACT ROUND
for(i=1; i <= 4; i++) //i represents levels and iterations 
{
    if(incorrect_count==4)
    {
        break;
    } //Without this block, getting 4 wrong answers will still allow you to continue into another level of this round
    
    let num1, num2; 

    do //Ensure that the 2nd number is always less than the 1st
    {
        num1 = 1 + Math.floor(Math.random()*25);
        num2 = 1 + Math.floor(Math.random()*9);
    } while(num1 < num2);
    
    let correct_ans = num1 - num2;
    let wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

    //Randomise the 'A or B' choices
    let random_num = 1 + Math.floor(Math.random()*2);
    let ans_choices;
            
    if(random_num == 1)
    {
        ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
    }

    else
    {
        ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
    }

    user_ans = prompt(`${NAME_1} you are on Round 2, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}-${num2}: \n${ans_choices}`);
    
    if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer
    {
        total_score+=POINTS;
        correct_count++;
        alert(`Score: ${total_score}`);
    }

    else if(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a") //Incorrect answer
    {
        do 
        {
            total_score-=POINTS;
            incorrect_count++;

            if(total_score < 0) //Maintain a minimum possible score of 0
            {
                total_score = 0;
            }
            
            alert(`Score: ${total_score}`);
            
            if(incorrect_count==4)
            {
                alert(`Sorry ${NAME_1}, you have used all of your chances`);
                break;
            }
            
            //Same level, new questions loops
            num1 = 1 + Math.floor(Math.random()*25);
            num2 = 1 + Math.floor(Math.random()*9);

            do //Ensure that the 2nd number is always less than the 1st
            {
                num1;
                num2;
            } while(num1 < num2);
            
            correct_ans = num1 - num2;
            wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

            random_num = 1 + Math.floor(Math.random()*2);
                
            if(random_num == 1)
            {
                ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
            }

            else
            {
                ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
            }
            
            user_ans = prompt(`${NAME_1} you are on Round 2, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}-${num2}: \n${ans_choices}`);    

            if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer (second chance)
            {
                total_score+=POINTS;
                correct_count++;
                alert(`Score: ${total_score}`);
            }
            
            if(incorrect_count==4)
            {
                alert(`Sorry ${NAME_1}, you have used all of your chances`);
                break;
            }
        } while(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a"); //End loop when answer is correct
    }
}

//ROUND 3: DIVIDE ROUND
for (i=1; i <= 2; i++) //i represents levels and iterations 
{
    if(incorrect_count==4)
    {
        break;
    } //Without this block, getting 4 wrong answers will still allow you to continue into another level of this round
    
    let num1, num2;
    
    do //Ensures that the 1st number is divisible by the 2nd
    {  
        num1 = 1 + Math.floor(Math.random()*25);
        num2 = 2 + Math.floor(Math.random()*9);
    } while(num1%num2!=0);

    let correct_ans = num1 / num2;
    let wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

    //Randomise the 'A or B' choices
    let random_num = 1 + Math.floor(Math.random()*2);
    let ans_choices;
            
    if(random_num == 1)
    {
        ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
    }

    else
    {
        ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
    }

    user_ans = prompt(`${NAME_1} you are on Round 3, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}/${num2}: \n${ans_choices}`);
    
    if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer
    {
        total_score+=POINTS;
        correct_count++;
        alert(`Score: ${total_score}`);
    }

    else if(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a") //Incorrect answer
    {
        do 
        {
            total_score-=POINTS;
            incorrect_count++;

            if(total_score < 0) //Maintain a minimum possible score of 0
            {
                total_score = 0;
            }
            
            alert(`Score: ${total_score}`);
            
            if(incorrect_count==4)
            {
                alert(`Sorry ${NAME_1}, you have used all of your chances`);
                break;
            }
            
            //Same level, new questions loops
            do //Ensures that the 1st number is divisible by the 2nd
            {  
                num1 = 1 + Math.floor(Math.random()*25);
                num2 = 2 + Math.floor(Math.random()*9);
            } while(num1%num2!=0);
            
            correct_ans = num1 / num2;
            wrong_ans = correct_ans + (1 + Math.floor(Math.random()*10));

            random_num = 1 + Math.floor(Math.random()*2);
                
            if(random_num == 1)
            {
                ans_choices = `A. ${correct_ans} \nB. ${wrong_ans}`;
            }

            else
            {
                ans_choices = `A. ${wrong_ans} \nB. ${correct_ans}`;
            }
            
            user_ans = prompt(`${NAME_1} you are on Round 3, Level ${i}. Can you please enter the letter which represents the correct answer for ${num1}/${num2}: \n${ans_choices}`);    

            if(random_num == 1 && user_ans == "a" || random_num == 2 && user_ans == "b") //Correct answer (second chance)
            {
                total_score+=POINTS;
                correct_count++;
                alert(`Score: ${total_score}`);
            }
            
            if(incorrect_count==4)
            {
                alert(`Sorry ${NAME_1}, you have used all of your chances`);
                break;
            }
        } while(random_num == 1 && user_ans == "b" || random_num == 2 && user_ans == "a"); //End loop when answer is correct
    }
}



const Gameplay=
{

}


//Business functions


//Win or Lose determination
if()
{
    
}

else
{
    
}


export default Gameplay;
*/