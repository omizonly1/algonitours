import { createContext, useContext } from 'react';

const PackageContext = createContext();

export const usePackages = () => useContext(PackageContext);

export default PackageContext;
