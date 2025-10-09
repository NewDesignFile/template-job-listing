import Item from "./filter-option"

const filterOptions = [
  {
    name: 'data-and-analytics',
    label: 'Data and Analytics'
  },
  {
    name: 'design',
    label: 'Design'
  },
  {
    name: 'devops-and-sysadmin',
    label: 'DevOps and SysAdmin'
  },
  {
    name: 'engineering',
    label: 'Engineering'
  }, 
  {
    name: 'hr-and-recruiting',
    label: 'HR and Recruiting'
  },
  {
    name: 'product',
    label: 'Product'
  },
  {
    name: 'sales-and-partnerships',
    label: 'Sales and Partnerships'
  }, 
  {
    name: 'writing',
    label: 'Writing'
  }
];

const Sidebar = () => {

  const displayFilterOptions = filterOptions.map((filterOption, index) => 
        <Item key={index} name={filterOption.name} label={filterOption.label}/>
      )  

  return <>
      <div className="sidebar">
        <p className="sidebar__heading">Job filters</p>
        <div className="filter-options">
          {displayFilterOptions}
        </div>
        <br />

        <div className="sub-footer-text mobile-hidden">
          <nav className="text--secondary-alt nu-u-mb-8 sidebar-links">
            <a target="_blank"href="https://new-ui.com/templates/job-listing">Download</a>
            <span>&nbsp;·&nbsp;</span>
            <a target="_blank" href="https://new-ui.com/docs/templates/job-listing">What&apos;s inside?</a>
          </nav>
          <div className="text--secondary-alt nu-u-mb-8 sidebar__footer">
            <p>Job Listing Template.</p>
            <p>&#169; 2025 Method Black Studio.</p>
          </div>
        </div>
      </div>
  </>
}

export default Sidebar