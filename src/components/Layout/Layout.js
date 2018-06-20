import React from 'react';
import Maincom from '../../hoc/Maincom';
import classes from './Layout.css';

const Layout =(props) => (
    <Maincom>
   <div> Toolbar, Menubar </div>
   <main className={classes.content}>
       {props.children}
    </main>
  </Maincom>

);

export default Layout;