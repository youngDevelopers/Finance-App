import DashboardBox from '@/components/DashboardBox';
import React from 'react'

interface Props {
    
}

const SecondRow = (props: Props) => {
    return (
      <>
        <DashboardBox gridArea="d"></DashboardBox>
        <DashboardBox gridArea="e"></DashboardBox>
        <DashboardBox gridArea="f"></DashboardBox>
      </>
    );
}

export default SecondRow
