# Components

1. **General**:

## Login
A login screen for users to access their accounts.

   - **Component**: Login.js
   - **Purpose**: Allows users to log in to the system.

2. **Parent Components**:

## Dashboard

A dashboard for parents to view a summary of their interactions with the school (e.g., payments, student progress).

   - **Component**: ParentDashboard.js
   - **Purpose**: A summary of student performance, fee status, and updates from the school.

## Payment History

Parents can view past payments and any pending fees.

   - **Component**: PaymentHistory.js
   - **Purpose**: Lists past transactions with details like date, amount, and payment status.

## Make Payment

A payment form for parents to pay fees.

   - **Component**: MakePayment.js
   - **Purpose**: Form to handle fee payments for parents.

## Profile

A feature for parents to manage their profile.

   - **Component**: Profile.js
   - **Purpose**: Allows parents to view and update their profile informatio

## Student Progress

A detailed view of the student's progress, report cards, and attendance.

   - **Component**: StudentProgress.js
   - **Purpose**: Shows grades, performance, and attendance for the student.


## Communication

A feature for parents to cummuniate with school admins

- **Component**: Communication.js
- **Purpose**: Enables parents to communicate with teachers or school administration.

3. **School (Admin/Teacher) Components**:

## Admin Dashboard

A dashboard for school admins/teachers to manage students, payments, and view analytics.

- **Component**: AdminDashboard.js
- **Purpose**: Overview of student data, pending fees, and announcements.

## View Payments

A component to display all the payments made by parents, along with filtering options for date range, status (pending, completed).

- **Component**: PaymentManagement.js
- **Purpose**: Allows the school admin to track payments made by parents.

## Add Student

A form for adding new students to the system.

- **Component**: AddStudent.js
- **Purpose**: Allows admins or teachers to register a new student.

## Manage Students

A component to view, edit, and remove student records.

- **Component**: ManageStudents.js
- **Purpose**: Lists all students with options to update details or remove them from the system.


## Teacher Management

A component to view, edit, and remove teacher records.

- **Component**: TeacherManagement.js
- **Purpose**: Allows administrators to manage teacher profiles.

## Announcements

A feature for admins to send announcements to parents, such as fee reminders or event updates.

- **Component**: Announcements.js
- **Purpose**: Form to post messages or notifications visible on the parent dashboard.

## Class Management

A form to assign students to classes and manage class data.

- **Component**: ClassManagement.js
- **Purpose**: Allows school admins to manage class assignments and view class rosters.

## View Attendance

A component for teachers to take and view attendance records.

- **Component**: ViewAttendance.js
- **Purpose**: View student attendance by class or date range.