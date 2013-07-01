console.log("Hello, welcome to Quizzical");

// name, email, budget_in_dollars, timeline_in_months, monthly_budget = '', '', '', '', 0;

name = prompt("What is your name?");
email = prompt("What is your email?");
budget_in_dollars = Number(prompt("What is your budget, in USD?"));
timeline_in_months = Number(prompt("What is you timeline, in months?"));


monthly_budget = budget_in_dollars/timeline_in_months;
alert("The amount due for your first month is $" + monthly_budget);

incomes = [];
while(income = prompt("What is your first source of monthly income? [Leave blank to continue]")) {
	incomes.push(income);
}

resulting_income_description = '';
for(i=0; i < incomes.length; i++) {
	if(i == 0)
		resulting_income_description = incomes[i];
	else if(i < incomes.length-1)
		resulting_income_description = resulting_income_description + ', ' + incomes[i];
	else
		resulting_income_description = resulting_income_description + ', and ' + incomes[i] + '.';


}

document.write('<p>Your sources of income are ' +resulting_income_description + '</p>');