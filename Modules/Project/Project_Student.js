const Members = require("./Members");
const Helper = require("./Helper");

    const courseData = [
        {
            cName : 'QA',
            cFee :  4000
        },
         {
            cName : 'Front End',
            cFee : 5000
        },
        {
            cName : 'Full Stack',
            cFee : 8000
        },
        {
            cName : 'PM',
            cFee : 3000
        }
    ]

class Students extends Members {

    // variables (Class/Field variables)
    studentData = {
        sId: 0,
        sCourseName: '',
        sTopicsCovered: '',
        sBalance: 0,
        sGrade: '',
    }

    static studentIdTracker = 100;

  
constructor(age, courseName, name, email, address) {
        super();    // to execute parent constructor
        if (age < 16 || courseName.length === 0 || name.length === 0 || email.length === 0 || address.length === 0) {
            throw 'incomplete data';
        } else {
            const cObject = this.verifyCourseName(courseName);
            if (!cObject) {
                console.log(`Please enter a valid course name. Course entered is "${courseName}"`);
                throw 'Invalid courseName';
            } else {
                // start enrollment process
                this.memberData.mName = Helper.toTitleCase(name);
                this.memberData.mAge = age;
                this.memberData.mEmail = email;
                this.memberData.mAddress = address;
                this.studentData.sBalance = cObject.cFee;
                this.studentData.sCourseName = cObject.cName;
                Students.studentIdTracker++;
                this.studentData.sId = `S${Students.studentIdTracker}`;
                console.log(`Congratulations for enrolling in ${cObject.cName} course.\nStudent id: S${Students.studentIdTracker}`);
            }
        }
    }



    verifyCourseName(courseName) {
        return courseData.find(
            cData => cData.cName.toUpperCase().localeCompare(courseName.toUpperCase()) === 0
        )
    }

 /**
*   ->getProfile
 *  student has to their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      Print profile as below:
 *          Profile:::
 *              Id: student-name
 *              Name: student-name
 *              Email: student-email
 *              Balance: student-balance
 *              Address: student-address
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
     */
    getProfile (studentId) {
        if ( studentId === this.studentData.sId) {
            console.log(
                `\n\t:::: Profile :::
                Id: ${this.studentData.sId}
                Name: ${this.memberData.mName}
                Email: ${this.memberData.mEmail}
                Balance: ${this.studentData.sBalance}
                Address: ${this.memberData.mAddress}
                ----------------------\n`
            );
        } else {
            console.log(`You have entered invalid id. Invalid id: ${studentId}`); 
        }
        
    }

   /**
 *  -> changeName
 *  student has to provide newName and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if newName is NOT same as stored-name
 *          change name in studentData and show message, Name is changed to "newName" successfully.
 *      otherwise
 *          show message, You are already registered with same name.
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 */

changeName (newStudentName, studentId) {
    if ( studentId === this.studentData.sId){
        if (newStudentName !== this.memberData.mName){
            this.memberData.mName = newStudentName;
            console.log(`Name is changed to '${this.memberData.mName}' successfully`);
        } else {
            console.log('You are already registered with same name.');
        }}     else {
        console.log(`You have entered invalid id. Invalid id: ${studentId}`);
    }
}

/**
 * -> changeCourse
 *  student has to provide newCourseName and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if newCourseName is same as stored-course-name (ignoring cases)
 *          show message, You are already registered in the "CourseName" course.
 *      otherwise
 *          update studentData.sBalance (set it to the fee of newCourseName)
 *          update student.sCourseName
 *          show message, Your course has been updated to "newCourseName"
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 */

changeCourse (newCourseName, studentId) {
    if ( studentId === this.studentData.sId) {
        const cCourseName = this.verifyCourseName(newCourseName);
        if (cCourseName){
            if(cCourseName.cName === this.studentData.sCourseName) {
            console.log(`You are already registered in the ${newCourseName} course`);
            } else {
            this.studentData.sBalance = cCourseName.cFee;
            this.studentData.sCourseName = cCourseName.cName;
            console.log(`Your course has been updated to ${newCourseName.toUpperCase()}`);
        }}
    }   else {
        console.log(`You have entered invalid id. Invalid id: ${studentId}`);
    }
}

/**
 * -> makePayment
 *  student has to provide paymentAmount and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if balance is greater than 0
 *          update studentData.sBalance accordingly
 *          show message -> Thank you for making payment. Your updated balance is XX.yy
 *      otherwise
 *          show message, No payment is required at this time.
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 */
makePayment (paymentAmount, studentId) {
    let studentBalance = this.studentData.sBalance - paymentAmount;
    if (studentId === this.studentData.sId) {
        if (studentBalance = 0) {
            console.log('No payment is required at this time');
        } else {
            this.studentData.sBalance = studentBalance;
            console.log(`Thank you for making payment. Your updated balance is ${this.studentData.sBalance}`);
        }
} else {
        console.log(`\nYou have entered invalid id. Invalid id: ${studentId}`);
    }
}

/**
 *  -> changeAddress
 *  student has to provide newAddress and their student-id as input
 *  if provided student-id is SAME as of this student's id
 *      if newAddress is NOT same as stored-address (ignoring cases)
 *          update studentData.sAddress with newAddress (store in UPPERCASE)
 *          show message, Address is changed to "newAddress" successfully.
 *      otherwise
 *          show message, You are already have same address in the system.
 *  otherwise
 *      show message -> You have entered invalid id. Invalid id: SXXX
 */

 changeAddress (newAddress,studentId) {
    if (studentId === this.studentData.sId) {
        if (newAddress.toUpperCase !== this.memberData.mAddress.toUpperCase) {
            this.memberData.mAddress = newAddress;
            console.log(`\nAddress is changed to ${newAddress} successfully`);
        } else {
            console.log(`\nYou are already have same address in the system`);
        }
    } else {
        console.log(`\nYou have entered invalid id. Invalid id: ${studentId}`);
    }
 }

 /**
  * -> dropFromCourse
 * student has to provide the studentId as input
 *      if provide-id is same as the studentId
 *          make student status as "Dropped"/false
 *          show message -> We will miss you; hope you join our future batch.
 *      otherwise,
 *          show message, You have entered invalid student-id
 */

  dropFromCourse (studentId) {
    if (studentId === this.studentData.sId) {
        this.studentData.sId = 0;
        console.log('Your student status is Dropped');
        console.log('We will miss you; hope you join our future batch');
    } else {
        console.log(`\nYou have entered invalid id. Invalid id: ${studentId}`);
    }
  }

    /**
     * bestWishes()
     * 
     * To send wishes/messages to Institute on behalf on all Students
     */
    static bestWishes(msg) {
        console.log(`On behalf of all students -> ${msg}`);
    }











}
module.exports = Students;

