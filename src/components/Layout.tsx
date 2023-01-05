import React, { useState } from 'react';

import { Sidebar } from '../components';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

    return (
      <React.Fragment>
        <div className="bg-gray-100 relative min-h-screen md:flex font-OpenSans">
          <Sidebar
            sidebarIsOpen={sidebarIsOpen}
            setSidebarIsOpen={() => setSidebarIsOpen(!sidebarIsOpen)}
          />
          <div className="flex-1 min-h-screen py-8 px-10">{children}</div>
        </div>
        <div className="w-full h-12 bottom-0 inset-x-0 bg-white flex items-center">
          <p className="mx-auto text-sm font-light">
            &#169; 2021 - Made with passion, using Gatsby
          </p>
        </div>
      </React.Fragment>
    );
};

export default Layout;