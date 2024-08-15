import React, { useState } from 'react';

const Employees = () => {
  const [employeesData, setEmployeesData] = useState([
    { id: 1, name: 'John Doe', designation: 'Software Engineer', country: 'USA', hireDate: '2021-01-15', reportsTo: 'Jane Smith', employeeID: 'EMP001' },
    { id: 2, name: 'Alice Johnson', designation: 'Project Manager', country: 'Canada', hireDate: '2020-02-20', reportsTo: 'Bob Brown', employeeID: 'EMP002' },
    { id: 3, name: 'Michael Brown', designation: 'UX Designer', country: 'UK', hireDate: '2019-03-10', reportsTo: 'Alice Johnson', employeeID: 'EMP003' },
    { id: 4, name: 'Emma Davis', designation: 'HR Specialist', country: 'Australia', hireDate: '2021-05-25', reportsTo: 'Jane Smith', employeeID: 'EMP004' },
    { id: 5, name: 'Sophia Martinez', designation: 'Data Scientist', country: 'Germany', hireDate: '2018-08-15', reportsTo: 'Bob Brown', employeeID: 'EMP005' },
    { id: 6, name: 'Liam Wilson', designation: 'DevOps Engineer', country: 'USA', hireDate: '2020-06-12', reportsTo: 'Alice Johnson', employeeID: 'EMP006' },
    { id: 7, name: 'Noah Taylor', designation: 'Backend Developer', country: 'France', hireDate: '2019-07-20', reportsTo: 'Jane Smith', employeeID: 'EMP007' },
    { id: 8, name: 'Olivia Anderson', designation: 'Front-End Developer', country: 'Italy', hireDate: '2021-11-05', reportsTo: 'Bob Brown', employeeID: 'EMP008' },
    { id: 9, name: 'Aiden Lee', designation: 'Full Stack Developer', country: 'Spain', hireDate: '2019-02-22', reportsTo: 'Alice Johnson', employeeID: 'EMP009' },
    { id: 10, name: 'Isabella King', designation: 'Content Writer', country: 'Netherlands', hireDate: '2020-04-30', reportsTo: 'Jane Smith', employeeID: 'EMP010' },
    { id: 11, name: 'Ethan Wright', designation: 'Quality Assurance', country: 'Sweden', hireDate: '2021-03-18', reportsTo: 'Bob Brown', employeeID: 'EMP011' },
    { id: 12, name: 'Mia Johnson', designation: 'Database Administrator', country: 'Norway', hireDate: '2018-10-10', reportsTo: 'Alice Johnson', employeeID: 'EMP012' },
    { id: 13, name: 'James Miller', designation: 'Web Designer', country: 'Denmark', hireDate: '2019-12-12', reportsTo: 'Jane Smith', employeeID: 'EMP013' },
    { id: 14, name: 'Harper Wilson', designation: 'Product Manager', country: 'Finland', hireDate: '2020-09-08', reportsTo: 'Bob Brown', employeeID: 'EMP014' },
    { id: 15, name: 'Lily Martinez', designation: 'System Analyst', country: 'Ireland', hireDate: '2021-07-15', reportsTo: 'Alice Johnson', employeeID: 'EMP015' },
    { id: 16, name: 'Benjamin Lee', designation: 'Cloud Engineer', country: 'Belgium', hireDate: '2018-05-05', reportsTo: 'Jane Smith', employeeID: 'EMP016' },
    { id: 17, name: 'Charlotte Harris', designation: 'Business Analyst', country: 'Switzerland', hireDate: '2019-11-20', reportsTo: 'Bob Brown', employeeID: 'EMP017' },
    { id: 18, name: 'Oliver Evans', designation: 'IT Support Specialist', country: 'Austria', hireDate: '2020-08-18', reportsTo: 'Alice Johnson', employeeID: 'EMP018' },
    { id: 19, name: 'Amelia Taylor', designation: 'Network Engineer', country: 'Poland', hireDate: '2021-04-30', reportsTo: 'Jane Smith', employeeID: 'EMP019' },
    { id: 20, name: 'William Clark', designation: 'Digital Marketer', country: 'Czech Republic', hireDate: '2019-06-25', reportsTo: 'Bob Brown', employeeID: 'EMP020' },
    { id: 21, name: 'Ella Moore', designation: 'Sales Executive', country: 'Hungary', hireDate: '2020-03-10', reportsTo: 'Alice Johnson', employeeID: 'EMP021' },
    { id: 22, name: 'Jack Scott', designation: 'Graphic Designer', country: 'Portugal', hireDate: '2018-07-15', reportsTo: 'Jane Smith', employeeID: 'EMP022' },
    { id: 23, name: 'Zoe Adams', designation: 'SEO Specialist', country: 'Greece', hireDate: '2019-01-12', reportsTo: 'Bob Brown', employeeID: 'EMP023' },
    { id: 24, name: 'Lucas Collins', designation: 'Customer Support', country: 'Turkey', hireDate: '2020-10-25', reportsTo: 'Alice Johnson', employeeID: 'EMP024' },
    { id: 25, name: 'Mia Roberts', designation: 'Operations Manager', country: 'Israel', hireDate: '2021-02-28', reportsTo: 'Jane Smith', employeeID: 'EMP025' },
    { id: 26, name: 'Elijah Turner', designation: 'Technical Writer', country: 'South Africa', hireDate: '2018-09-10', reportsTo: 'Bob Brown', employeeID: 'EMP026' },
    { id: 27, name: 'Avery Carter', designation: 'HR Coordinator', country: 'Saudi Arabia', hireDate: '2019-12-05', reportsTo: 'Alice Johnson', employeeID: 'EMP027' },
    { id: 28, name: 'Mason Mitchell', designation: 'Business Development', country: 'UAE', hireDate: '2020-07-22', reportsTo: 'Jane Smith', employeeID: 'EMP028' },
    { id: 29, name: 'Harper Evans', designation: 'Financial Analyst', country: 'Singapore', hireDate: '2021-08-19', reportsTo: 'Bob Brown', employeeID: 'EMP029' },
    { id: 30, name: 'Ethan Reed', designation: 'Risk Manager', country: 'Malaysia', hireDate: '2018-11-12', reportsTo: 'Alice Johnson', employeeID: 'EMP030' },
    { id: 31, name: 'Aiden Bennett', designation: 'Product Designer', country: 'Philippines', hireDate: '2019-04-30', reportsTo: 'Jane Smith', employeeID: 'EMP031' },
    { id: 32, name: 'Chloe Ward', designation: 'Content Strategist', country: 'Vietnam', hireDate: '2020-05-15', reportsTo: 'Bob Brown', employeeID: 'EMP032' },
    { id: 33, name: 'James King', designation: 'Social Media Manager', country: 'Thailand', hireDate: '2021-09-10', reportsTo: 'Alice Johnson', employeeID: 'EMP033' },
    { id: 34, name: 'Amelia Hall', designation: 'PR Specialist', country: 'India', hireDate: '2018-06-25', reportsTo: 'Jane Smith', employeeID: 'EMP034' },
    { id: 35, name: 'Owen Green', designation: 'Event Coordinator', country: 'Pakistan', hireDate: '2019-05-15', reportsTo: 'Bob Brown', employeeID: 'EMP035' },
    { id: 36, name: 'Ella Scott', designation: 'Training Specialist', country: 'Nepal', hireDate: '2020-06-05', reportsTo: 'Alice Johnson', employeeID: 'EMP036' },
    { id: 37, name: 'Ryan Johnson', designation: 'Logistics Manager', country: 'Sri Lanka', hireDate: '2021-03-20', reportsTo: 'Jane Smith', employeeID: 'EMP037' },
    { id: 38, name: 'Sophie Adams', designation: 'Supply Chain Analyst', country: 'Bangladesh', hireDate: '2018-08-10', reportsTo: 'Bob Brown', employeeID: 'EMP038' },
    { id: 39, name: 'Ethan Miller', designation: 'Operations Analyst', country: 'Pakistan', hireDate: '2020-01-15', reportsTo: 'Alice Johnson', employeeID: 'EMP039' },
    { id: 40, name: 'Ava White', designation: 'Quality Engineer', country: 'Nepal', hireDate: '2021-07-08', reportsTo: 'Jane Smith', employeeID: 'EMP040' },
    { id: 41, name: 'Elijah Brown', designation: 'Compliance Officer', country: 'Sri Lanka', hireDate: '2019-09-10', reportsTo: 'Bob Brown', employeeID: 'EMP041' },
    { id: 42, name: 'Lily Wilson', designation: 'Regulatory Affairs', country: 'Bangladesh', hireDate: '2020-11-25', reportsTo: 'Alice Johnson', employeeID: 'EMP042' },
    { id: 43, name: 'Logan Martinez', designation: 'Technical Support', country: 'India', hireDate: '2021-04-05', reportsTo: 'Jane Smith', employeeID: 'EMP043' },
    { id: 44, name: 'Zoe Garcia', designation: 'Product Specialist', country: 'Nepal', hireDate: '2018-02-20', reportsTo: 'Bob Brown', employeeID: 'EMP044' },
    { id: 45, name: 'Mason Rodriguez', designation: 'Customer Success', country: 'Sri Lanka', hireDate: '2019-03-25', reportsTo: 'Alice Johnson', employeeID: 'EMP045' },
    { id: 46, name: 'Madison Davis', designation: 'E-commerce Specialist', country: 'Bangladesh', hireDate: '2020-12-05', reportsTo: 'Jane Smith', employeeID: 'EMP046' },
    { id: 47, name: 'Aiden Lee', designation: 'Business Intelligence', country: 'Pakistan', hireDate: '2021-06-22', reportsTo: 'Bob Brown', employeeID: 'EMP047' },
    { id: 48, name: 'Emily Thompson', designation: 'Data Analyst', country: 'India', hireDate: '2018-10-30', reportsTo: 'Alice Johnson', employeeID: 'EMP048' },
    { id: 49, name: 'Christopher Moore', designation: 'Software Tester', country: 'Nepal', hireDate: '2019-11-15', reportsTo: 'Jane Smith', employeeID: 'EMP049' },
    { id: 50, name: 'Avery Nelson', designation: 'IT Consultant', country: 'Sri Lanka', hireDate: '2020-09-10', reportsTo: 'Bob Brown', employeeID: 'EMP050' },
    { id: 51, name: 'Ella Anderson', designation: 'Product Owner', country: 'Bangladesh', hireDate: '2021-08-19', reportsTo: 'Alice Johnson', employeeID: 'EMP051' },
    { id: 52, name: 'Daniel Harris', designation: 'Operations Coordinator', country: 'Pakistan', hireDate: '2018-11-05', reportsTo: 'Jane Smith', employeeID: 'EMP052' },
    { id: 53, name: 'Mia Robinson', designation: 'Digital Analyst', country: 'India', hireDate: '2019-05-15', reportsTo: 'Bob Brown', employeeID: 'EMP053' },
    { id: 54, name: 'Matthew Young', designation: 'Risk Analyst', country: 'Nepal', hireDate: '2020-06-22', reportsTo: 'Alice Johnson', employeeID: 'EMP054' },
    { id: 55, name: 'Chloe Scott', designation: 'Revenue Manager', country: 'Sri Lanka', hireDate: '2021-03-10', reportsTo: 'Jane Smith', employeeID: 'EMP055' },
    { id: 56, name: 'Jackson Lee', designation: 'Supply Chain Manager', country: 'Bangladesh', hireDate: '2018-12-15', reportsTo: 'Bob Brown', employeeID: 'EMP056' },
    { id: 57, name: 'Olivia White', designation: 'Sales Analyst', country: 'Pakistan', hireDate: '2019-07-30', reportsTo: 'Alice Johnson', employeeID: 'EMP057' },
    { id: 58, name: 'Lucas Robinson', designation: 'Market Researcher', country: 'India', hireDate: '2020-04-10', reportsTo: 'Jane Smith', employeeID: 'EMP058' },
    { id: 59, name: 'Isabella Wright', designation: 'Operations Analyst', country: 'Nepal', hireDate: '2021-05-25', reportsTo: 'Bob Brown', employeeID: 'EMP059' },
    { id: 60, name: 'Ethan Garcia', designation: 'Financial Analyst', country: 'Sri Lanka', hireDate: '2018-10-25', reportsTo: 'Alice Johnson', employeeID: 'EMP060' },
  ]);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const totalPages = Math.ceil(employeesData.length / itemsPerPage);

  // Filter employees based on search term
  const filteredEmployees = employeesData.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate index for the current page data
  const indexOfLastEmployee = currentPage * itemsPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - itemsPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <div className="p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Employees</h1>

      {/* Search Input */}
      <div className="mb-4 flex items-center border border-gray-300 rounded-md overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name or designation"
          className="p-2 w-full border-none focus:ring-0"
        />
        <svg
          className="w-6 h-6 text-gray-400 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 017 7h2a9 9 0 00-9-9v2zm0 0a7 7 0 00-7 7H2a9 9 0 0117 0h-2a7 7 0 00-7-7z"
          />
        </svg>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-cyan-400 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Employee</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Designation</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Country</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Hire Date</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Reports To</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Employee ID</th>
            </tr>
          </thead>
          <tbody>
            {currentEmployees.map(employee => (
              <tr
                key={employee.id}
                className="bg-white hover:bg-cyan-100 transition-colors duration-300"
              >
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <img
                      src={`https://randomuser.me/api/portraits/${Math.random() < 0.5 ? 'men' : 'women'}/${Math.floor(Math.random() * 100)}.jpg`}
                      alt={employee.name}
                      className="w-10 h-10 rounded-full"
                    />

                    <span>{employee.name}</span>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">{employee.designation}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.country}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.hireDate}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.reportsTo}</td>
                <td className="border border-gray-300 px-4 py-2">{employee.employeeID}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex items-center justify-center space-x-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 border rounded bg-white hover:bg-gray-100 transition-colors duration-300"
          disabled={currentPage === 1}
        >
          &laquo;
        </button>

        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-4 py-2 border rounded bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            {currentPage - 1}
          </button>
        )}

        <button
          className="px-4 py-2 border rounded bg-cyan-500 text-white hover:bg-cyan-600 transition-colors duration-300"
        >
          {currentPage}
        </button>

        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 border rounded bg-white hover:bg-gray-100 transition-colors duration-300"
          >
            {currentPage + 1}
          </button>
        )}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 border rounded bg-white hover:bg-gray-100 transition-colors duration-300"
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Employees;
