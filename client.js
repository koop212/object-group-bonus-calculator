console.log('js');


const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74000',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

//loop through employee array
//creating new employee object
// let employee = {
//   name: '',
//   employeeNumber: '',
//   annualSalary: '',
//   reviewRating: 0
// };
//let bonusPercentage = 0;


function bonusCalculation(employee) {
  let employeeBonusInfo = {
    name: '',
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  };
function findBonusPercentage(){
  for (i = 0; i < employees.length; i++) {
    employee = employees[i];
    console.log(employees[i]);
    if (employee.reviewRating <= 2) {
      employeeBonusInfo.bonusPercentage = 0;
      console.log(employeeBonusInfo);
    } else if (employees[i].reviewRating === 3) {
      employeeBonusInfo.bonusPercentage = 4;
      console.log(employeeBonusInfo);
    } else if (employees[i].reviewRating === 4) {
      employeeBonusInfo.bonusPercentage = 6;
      console.log(employeeBonusInfo);
    } else if (employees[i].reviewRating === 5) {
      employeeBonusInfo.bonusPercentage = 10;
      console.log(employeeBonusInfo);
    }
    if (employees[i].employeeNumber.length === 4) {
      employeeBonusInfo.bonusPercentage += 5;
      console.log(employeeBonusInfo);
    }
    if (employees[i].annualSalary > 65000 && employees[i].reviewRating > 2) {
      employeeBonusInfo.bonusPercentage = 1;
      console.log(employeeBonusInfo);
    }
    if (employeeBonusInfo.bonusPercentage < 0) {
      employeeBonusInfo.bonusPercentage = 0;
      console.log(employeeBonusInfo);
    } else if (employeeBonusInfo.bonusPercentage > 13) {
      employeeBonusInfo.bonusPercentage = 13;
      console.log(employeeBonusInfo);
    }
  }//end loop
  return employeeBonusInfo.bonusPercentage;
}
}

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);
