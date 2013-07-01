console.log("Hello, welcome to Quizzical");

// name, email, budget_in_dollars, timeline_in_months, monthly_budget = '', '', '', '', 0;

// name = prompt("What is your name?");
// email = prompt("What is your email?");
// budget_in_dollars = Number(prompt("What is your budget, in USD?"));
// timeline_in_months = Number(prompt("What is you timeline, in months?"));


// monthly_budget = budget_in_dollars/timeline_in_months;
// alert("The amount due for your first month is $" + monthly_budget);

incomes = []
while(income = prompt("What is your source of income and it's amount? [Leave blank to continue]")) {
	incomes.push(income.split(", "));
}


resulting_income_description = '';
total_income = 0;
for(i=0; i < incomes.length; i++) {
	if(i == 0) 
		resulting_income_description = incomes[i];
	else if(i < incomes.length-1) 
		resulting_income_description = resulting_income_description + ', ' + incomes[i];
	else 
		resulting_income_description = resulting_income_description + ', and ' + incomes[i] + '.';
total_income = total_income + Number(incomes[i][1]);
}


// resulting_income_description = '';
// for(i=0; i < incomes.length; i++) {
// 	if(i == 0)
// 		resulting_income_description = incomes[i];
// 	else if(i < incomes.length-1)
// 		resulting_income_description = resulting_income_description + ', ' + incomes[i];
// 	else
// 		resulting_income_description = resulting_income_description + ', and ' + incomes[i] + '.';


// }
document.write('<p>Your sources of income are:</p>')
document.write('<center><table><tr><td>Source</td><td>Amount</td></tr>')
for(i=0; i < incomes.length; i++) {
	document.write('<tr><td>' + incomes[i][0] + '</td><td>$' + incomes[i][1] + '</td></tr>')
}
document.write('<tr><td>Total:</td><td>$' + total_income + '</td></tr></table></center>')
// document.write('<p>Your sources of income are ' +resulting_income_description + ' Your total income is $' +total_income + '</p>');