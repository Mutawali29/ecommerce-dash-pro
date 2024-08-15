import React, { useState } from 'react';

const Customers = () => {
  const initialCustomersData = [
    {
      name: 'John Doe',
      projectName: 'Website Redesign',
      status: 'Active',
      weeks: 12,
      budget: '$10,000',
      location: 'New York, USA',
      customerId: 'CUST1001',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      projectName: 'Mobile App Development',
      status: 'Pending',
      weeks: 8,
      budget: '$8,000',
      location: 'San Francisco, USA',
      customerId: 'CUST1002',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Alice Brown',
      projectName: 'Marketing Campaign',
      status: 'Completed',
      weeks: 16,
      budget: '$12,000',
      location: 'Los Angeles, USA',
      customerId: 'CUST1003',
      imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    },
    {
      name: 'Bob Johnson',
      projectName: 'E-commerce Platform',
      status: 'Cancel',
      weeks: 6,
      budget: '$5,000',
      location: 'Chicago, USA',
      customerId: 'CUST1004',
      imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
    {
      name: 'Emily Davis',
      projectName: 'SEO Optimization',
      status: 'Active',
      weeks: 10,
      budget: '$7,500',
      location: 'Miami, USA',
      customerId: 'CUST1005',
      imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
      name: 'Michael Wilson',
      projectName: 'Content Strategy',
      status: 'Pending',
      weeks: 14,
      budget: '$9,000',
      location: 'Dallas, USA',
      customerId: 'CUST1006',
      imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    },
    {
      name: 'Sarah Lee',
      projectName: 'Social Media Marketing',
      status: 'Completed',
      weeks: 9,
      budget: '$6,200',
      location: 'Seattle, USA',
      customerId: 'CUST1007',
      imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
    },
    {
      name: 'David Harris',
      projectName: 'Brand Identity',
      status: 'Cancel',
      weeks: 11,
      budget: '$11,000',
      location: 'Boston, USA',
      customerId: 'CUST1008',
      imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
    },
    {
      name: 'Laura Martinez',
      projectName: 'UX/UI Design',
      status: 'Active',
      weeks: 13,
      budget: '$10,500',
      location: 'San Diego, USA',
      customerId: 'CUST1009',
      imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      name: 'James White',
      projectName: 'Web Development',
      status: 'Pending',
      weeks: 7,
      budget: '$6,000',
      location: 'Philadelphia, USA',
      customerId: 'CUST1010',
      imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
    },
    {
      name: 'Olivia Thompson',
      projectName: 'Product Launch',
      status: 'Completed',
      weeks: 15,
      budget: '$13,000',
      location: 'Austin, USA',
      customerId: 'CUST1011',
      imageUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
    },
    {
      name: 'Ethan Young',
      projectName: 'Customer Support',
      status: 'Cancel',
      weeks: 5,
      budget: '$4,500',
      location: 'Atlanta, USA',
      customerId: 'CUST1012',
      imageUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: 'Sophia Anderson',
      projectName: 'Email Marketing',
      status: 'Active',
      weeks: 8,
      budget: '$3,500',
      location: 'Denver, USA',
      customerId: 'CUST1013',
      imageUrl: 'https://randomuser.me/api/portraits/women/13.jpg',
    },
    {
      name: 'William King',
      projectName: 'Data Analysis',
      status: 'Pending',
      weeks: 14,
      budget: '$9,800',
      location: 'San Jose, USA',
      customerId: 'CUST1014',
      imageUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
    },
    {
      name: 'Isabella Scott',
      projectName: 'Business Strategy',
      status: 'Completed',
      weeks: 12,
      budget: '$11,500',
      location: 'Sacramento, USA',
      customerId: 'CUST1015',
      imageUrl: 'https://randomuser.me/api/portraits/women/15.jpg',
    },
    {
      name: 'Benjamin Green',
      projectName: 'App Integration',
      status: 'Cancel',
      weeks: 6,
      budget: '$7,000',
      location: 'Cleveland, USA',
      customerId: 'CUST1016',
      imageUrl: 'https://randomuser.me/api/portraits/men/16.jpg',
    },
    {
      name: 'Mia Wright',
      projectName: 'Video Production',
      status: 'Active',
      weeks: 9,
      budget: '$8,200',
      location: 'Detroit, USA',
      customerId: 'CUST1017',
      imageUrl: 'https://randomuser.me/api/portraits/women/17.jpg',
    },
    {
      name: 'Lucas Adams',
      projectName: 'Market Research',
      status: 'Pending',
      weeks: 11,
      budget: '$6,800',
      location: 'Indianapolis, USA',
      customerId: 'CUST1018',
      imageUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
    },
    {
      name: 'Charlotte Evans',
      projectName: 'Sales Funnel',
      status: 'Completed',
      weeks: 13,
      budget: '$9,600',
      location: 'Columbus, USA',
      customerId: 'CUST1019',
      imageUrl: 'https://randomuser.me/api/portraits/women/19.jpg',
    },
    {
      name: 'Liam Baker',
      projectName: 'Product Development',
      status: 'Cancel',
      weeks: 8,
      budget: '$7,800',
      location: 'Fort Worth, USA',
      customerId: 'CUST1020',
      imageUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
    },
    {
      name: 'Amelia Nelson',
      projectName: 'Website Maintenance',
      status: 'Active',
      weeks: 10,
      budget: '$5,600',
      location: 'Charlotte, USA',
      customerId: 'CUST1021',
      imageUrl: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      name: 'Alexander Carter',
      projectName: 'IT Support',
      status: 'Pending',
      weeks: 7,
      budget: '$4,200',
      location: 'San Antonio, USA',
      customerId: 'CUST1022',
      imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Harper Roberts',
      projectName: 'Graphic Design',
      status: 'Completed',
      weeks: 12,
      budget: '$6,500',
      location: 'San Diego, USA',
      customerId: 'CUST1023',
      imageUrl: 'https://randomuser.me/api/portraits/women/23.jpg',
    },
    {
      name: 'Daniel Lewis',
      projectName: 'Social Media Strategy',
      status: 'Cancel',
      weeks: 5,
      budget: '$3,800',
      location: 'San Francisco, USA',
      customerId: 'CUST1024',
      imageUrl: 'https://randomuser.me/api/portraits/men/24.jpg',
    },
    {
      name: 'Ella Martinez',
      projectName: 'Online Advertising',
      status: 'Active',
      weeks: 14,
      budget: '$8,900',
      location: 'Washington, USA',
      customerId: 'CUST1025',
      imageUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
    },
    {
      name: 'Matthew Moore',
      projectName: 'CRM Implementation',
      status: 'Pending',
      weeks: 9,
      budget: '$7,400',
      location: 'Nashville, USA',
      customerId: 'CUST1026',
      imageUrl: 'https://randomuser.me/api/portraits/men/26.jpg',
    },
    {
      name: 'Abigail Wilson',
      projectName: 'Digital Transformation',
      status: 'Completed',
      weeks: 11,
      budget: '$10,800',
      location: 'Baltimore, USA',
      customerId: 'CUST1027',
      imageUrl: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: 'James Miller',
      projectName: 'IT Infrastructure',
      status: 'Cancel',
      weeks: 8,
      budget: '$6,000',
      location: 'Omaha, USA',
      customerId: 'CUST1028',
      imageUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
    },
    {
      name: 'Sofia Allen',
      projectName: 'Mobile Development',
      status: 'Active',
      weeks: 12,
      budget: '$9,000',
      location: 'Kansas City, USA',
      customerId: 'CUST1029',
      imageUrl: 'https://randomuser.me/api/portraits/women/29.jpg',
    },
    {
      name: 'Jackson Young',
      projectName: 'SEO Analysis',
      status: 'Pending',
      weeks: 10,
      budget: '$6,300',
      location: 'Las Vegas, USA',
      customerId: 'CUST1030',
      imageUrl: 'https://randomuser.me/api/portraits/men/30.jpg',
    },
    {
      name: 'Grace King',
      projectName: 'Customer Experience',
      status: 'Completed',
      weeks: 15,
      budget: '$11,200',
      location: 'Atlanta, USA',
      customerId: 'CUST1031',
      imageUrl: 'https://randomuser.me/api/portraits/women/31.jpg',
    },
    {
      name: 'Aiden Walker',
      projectName: 'Business Analytics',
      status: 'Cancel',
      weeks: 7,
      budget: '$5,500',
      location: 'Cleveland, USA',
      customerId: 'CUST1032',
      imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Chloe Allen',
      projectName: 'Content Creation',
      status: 'Active',
      weeks: 13,
      budget: '$8,800',
      location: 'St. Louis, USA',
      customerId: 'CUST1033',
      imageUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      name: 'Ryan Davis',
      projectName: 'Web Analytics',
      status: 'Pending',
      weeks: 9,
      budget: '$7,000',
      location: 'Minneapolis, USA',
      customerId: 'CUST1034',
      imageUrl: 'https://randomuser.me/api/portraits/men/34.jpg',
    },
    {
      name: 'Zoe Brown',
      projectName: 'Product Design',
      status: 'Completed',
      weeks: 11,
      budget: '$9,500',
      location: 'Tulsa, USA',
      customerId: 'CUST1035',
      imageUrl: 'https://randomuser.me/api/portraits/women/35.jpg',
    },
    {
      name: 'Elijah White',
      projectName: 'Market Expansion',
      status: 'Cancel',
      weeks: 8,
      budget: '$7,200',
      location: 'Oakland, USA',
      customerId: 'CUST1036',
      imageUrl: 'https://randomuser.me/api/portraits/men/36.jpg',
    },
    {
      name: 'Lily Rodriguez',
      projectName: 'User Research',
      status: 'Active',
      weeks: 10,
      budget: '$5,900',
      location: 'Honolulu, USA',
      customerId: 'CUST1037',
      imageUrl: 'https://randomuser.me/api/portraits/women/37.jpg',
    },
    {
      name: 'Mason Scott',
      projectName: 'Tech Support',
      status: 'Pending',
      weeks: 11,
      budget: '$6,700',
      location: 'Raleigh, USA',
      customerId: 'CUST1038',
      imageUrl: 'https://randomuser.me/api/portraits/men/38.jpg',
    },
    {
      name: 'Aria Lee',
      projectName: 'Sales Optimization',
      status: 'Completed',
      weeks: 12,
      budget: '$8,600',
      location: 'Colorado Springs, USA',
      customerId: 'CUST1039',
      imageUrl: 'https://randomuser.me/api/portraits/women/39.jpg',
    },
    {
      name: 'Avery Miller',
      projectName: 'Financial Planning',
      status: 'Cancel',
      weeks: 6,
      budget: '$5,200',
      location: 'Wichita, USA',
      customerId: 'CUST1040',
      imageUrl: 'https://randomuser.me/api/portraits/men/40.jpg',
    },
    {
      name: 'Ella Martinez',
      projectName: 'Event Management',
      status: 'Active',
      weeks: 8,
      budget: '$4,800',
      location: 'New Orleans, USA',
      customerId: 'CUST1041',
      imageUrl: 'https://randomuser.me/api/portraits/women/41.jpg',
    },
    {
      name: 'Owen Harris',
      projectName: 'Product Management',
      status: 'Pending',
      weeks: 10,
      budget: '$6,900',
      location: 'Arlington, USA',
      customerId: 'CUST1042',
      imageUrl: 'https://randomuser.me/api/portraits/men/42.jpg',
    },
    {
      name: 'Mia Adams',
      projectName: 'Cloud Solutions',
      status: 'Completed',
      weeks: 13,
      budget: '$10,000',
      location: 'Bakersfield, USA',
      customerId: 'CUST1043',
      imageUrl: 'https://randomuser.me/api/portraits/women/43.jpg',
    },
    {
      name: 'Ethan Johnson',
      projectName: 'Software Development',
      status: 'Cancel',
      weeks: 7,
      budget: '$7,100',
      location: 'Aurora, USA',
      customerId: 'CUST1044',
      imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      name: 'Grace Nelson',
      projectName: 'Network Security',
      status: 'Active',
      weeks: 12,
      budget: '$9,200',
      location: 'Tampa, USA',
      customerId: 'CUST1045',
      imageUrl: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      name: 'Liam Lee',
      projectName: 'Business Development',
      status: 'Pending',
      weeks: 14,
      budget: '$8,000',
      location: 'Omaha, USA',
      customerId: 'CUST1046',
      imageUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
    },
    {
      name: 'Isabella Johnson',
      projectName: 'Strategic Planning',
      status: 'Completed',
      weeks: 9,
      budget: '$7,300',
      location: 'Santa Ana, USA',
      customerId: 'CUST1047',
      imageUrl: 'https://randomuser.me/api/portraits/women/47.jpg',
    },
    {
      name: 'Jacob Brown',
      projectName: 'System Integration',
      status: 'Cancel',
      weeks: 8,
      budget: '$6,200',
      location: 'Riverside, USA',
      customerId: 'CUST1048',
      imageUrl: 'https://randomuser.me/api/portraits/men/48.jpg',
    },
    {
      name: 'Sophia Green',
      projectName: 'IT Consulting',
      status: 'Active',
      weeks: 10,
      budget: '$5,800',
      location: 'Henderson, USA',
      customerId: 'CUST1049',
      imageUrl: 'https://randomuser.me/api/portraits/women/49.jpg',
    },
    {
      name: 'William Taylor',
      projectName: 'Data Migration',
      status: 'Pending',
      weeks: 11,
      budget: '$6,500',
      location: 'Chula Vista, USA',
      customerId: 'CUST1050',
      imageUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
    },
    {
      name: 'Emily Hernandez',
      projectName: 'Digital Marketing',
      status: 'Completed',
      weeks: 12,
      budget: '$8,900',
      location: 'Fort Wayne, USA',
      customerId: 'CUST1051',
      imageUrl: 'https://randomuser.me/api/portraits/women/51.jpg',
    },
    {
      name: 'James Walker',
      projectName: 'Customer Insights',
      status: 'Cancel',
      weeks: 7,
      budget: '$5,400',
      location: 'Worcester, USA',
      customerId: 'CUST1052',
      imageUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
    },
    {
      name: 'Charlotte Martinez',
      projectName: 'Risk Management',
      status: 'Active',
      weeks: 14,
      budget: '$10,500',
      location: 'Green Bay, USA',
      customerId: 'CUST1053',
      imageUrl: 'https://randomuser.me/api/portraits/women/53.jpg',
    },
    {
      name: 'Benjamin Wilson',
      projectName: 'IT Solutions',
      status: 'Pending',
      weeks: 11,
      budget: '$7,700',
      location: 'Des Moines, USA',
      customerId: 'CUST1054',
      imageUrl: 'https://randomuser.me/api/portraits/men/54.jpg',
    },
    {
      name: 'Mia Thompson',
      projectName: 'Website Design',
      status: 'Completed',
      weeks: 13,
      budget: '$9,300',
      location: 'Evansville, USA',
      customerId: 'CUST1055',
      imageUrl: 'https://randomuser.me/api/portraits/women/55.jpg',
    },
    {
      name: 'Ethan Davis',
      projectName: 'Customer Retention',
      status: 'Cancel',
      weeks: 9,
      budget: '$6,400',
      location: 'Hartford, USA',
      customerId: 'CUST1056',
      imageUrl: 'https://randomuser.me/api/portraits/men/56.jpg',
    },
    {
      name: 'Olivia Taylor',
      projectName: 'IT Training',
      status: 'Active',
      weeks: 8,
      budget: '$4,600',
      location: 'Gainesville, USA',
      customerId: 'CUST1057',
      imageUrl: 'https://randomuser.me/api/portraits/women/57.jpg',
    },
    {
      name: 'Henry Miller',
      projectName: 'Product Strategy',
      status: 'Pending',
      weeks: 10,
      budget: '$7,100',
      location: 'Overland Park, USA',
      customerId: 'CUST1058',
      imageUrl: 'https://randomuser.me/api/portraits/men/58.jpg',
    },
    {
      name: 'Ava Johnson',
      projectName: 'Digital Media',
      status: 'Completed',
      weeks: 12,
      budget: '$8,200',
      location: 'Lubbock, USA',
      customerId: 'CUST1059',
      imageUrl: 'https://randomuser.me/api/portraits/women/59.jpg',
    },
    {
      name: 'William Anderson',
      projectName: 'Business Intelligence',
      status: 'Cancel',
      weeks: 6,
      budget: '$5,700',
      location: 'Santa Clara, USA',
      customerId: 'CUST1060',
      imageUrl: 'https://randomuser.me/api/portraits/men/60.jpg',
    },
  ];

  const [customersData, setCustomersData] = useState(initialCustomersData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [selectedCustomers, setSelectedCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  
  const totalPages = Math.ceil(customersData.length / itemsPerPage);

  
  const currentItems = customersData
    .filter((customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };

  const handleCheckboxChange = (customerId) => {
    setSelectedCustomers((prevSelected) =>
      prevSelected.includes(customerId)
        ? prevSelected.filter((id) => id !== customerId)
        : [...prevSelected, customerId]
    );
  };

  const handleDeleteSelected = () => {
    if (window.confirm('Are you sure you want to delete selected customers?')) {
      const updatedCustomers = customersData.filter(
        (customer) => !selectedCustomers.includes(customer.customerId)
      );
      setCustomersData(updatedCustomers);
      setSelectedCustomers([]);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-blue-500 text-white';
      case 'Pending':
        return 'bg-orange-500 text-white';
      case 'Completed':
        return 'bg-green-500 text-white';
      case 'Cancel':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-300 text-gray-700';
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Customers</h1>

      {/* Search bar */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Delete button */}
      <div className="mb-4 flex justify-between items-center">
        <button
          onClick={handleDeleteSelected}
          disabled={selectedCustomers.length === 0}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-400 transition-colors"
        >
          Delete Selected
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-cyan-400 text-white">
            <tr>
              <th className="p-2">
                <input
                  type="checkbox"
                  checked={
                    selectedCustomers.length === currentItems.length &&
                    currentItems.length > 0
                  }
                  onChange={(e) =>
                    setSelectedCustomers(
                      e.target.checked ? currentItems.map((c) => c.customerId) : []
                    )
                  }
                />
              </th>
              <th className="p-2">Image</th>
              <th className="p-2">Name</th>
              <th className="p-2">Project Name</th>
              <th className="p-2">Status</th>
              <th className="p-2">Weeks</th>
              <th className="p-2">Budget</th>
              <th className="p-2">Location</th>
              <th className="p-2">Customer ID</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((customer, index) => (
              <tr
                key={customer.customerId}
                className={`text-center border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedCustomers.includes(customer.customerId)}
                    onChange={() => handleCheckboxChange(customer.customerId)}
                  />
                </td>
                <td className="p-2">
                  <img
                    src={customer.imageUrl}
                    alt={customer.name}
                    className="w-12 h-12 rounded-full mx-auto border-2 border-gray-300"
                  />
                </td>
                <td className="p-2">{customer.name}</td>
                <td className="p-2">{customer.projectName}</td>
                <td className="p-2">
                  <span
                    className={`py-1 px-3 rounded-full text-sm font-semibold ${getStatusColor(
                      customer.status
                    )}`}
                  >
                    {customer.status}
                  </span>
                </td>
                <td className="p-2">{customer.weeks}</td>
                <td className="p-2">{customer.budget}</td>
                <td className="p-2">{customer.location}</td>
                <td className="p-2">{customer.customerId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-6 flex-col md:flex-row">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-600 disabled:bg-gray-400 transition-colors mb-2 md:mb-0"
        >
          &larr; Previous
        </button>
        <div className="flex items-center space-x-2 mb-2 md:mb-0">
          <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(Math.min(totalPages, Math.max(1, Number(e.target.value))))}
            className="w-16 px-2 py-1 border border-gray-300 rounded-md text-center"
          />
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-600 disabled:bg-gray-400 transition-colors"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Customers;
