/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useState } from 'react';
import { IconBaseProps } from 'react-icons';

interface headerPorpsData {
  title: string;
  subTitle: string;
  icon: React.ComponentType<IconBaseProps>;
}

interface HeaderContextData {
  headerProps: headerPorpsData;
  updateHeader(data: headerPorpsData): void;
}

export const HeaderContext = createContext<HeaderContextData>(
  {} as HeaderContextData,
);

export const HeaderProvider: React.FC = ({ children }) => {
  const [headerProps, setHeaderProps] = useState<headerPorpsData>(
    {} as headerPorpsData,
  );

  const updateHeader = useCallback(
    ({ title, subTitle, icon }: headerPorpsData) => {
      setHeaderProps({ title, subTitle, icon });
    },
    [],
  );

  return (
    <HeaderContext.Provider value={{ updateHeader, headerProps }}>
      {children}
    </HeaderContext.Provider>
  );
};
