import React, {Component} from 'react';
import Maincom from '../../hoc/Maincom';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
    constructor(props){
        super(props);
          this.state={
            ingredients : {
                salad:1,
                bacon:2,
                cheese:2,            
                meat:1
            }
        };
    }
    render(){
        return (
            <Maincom>
                <Burger ingredients= {this.props.ingredients}/>
                <div> Build-controls </div>
            </Maincom>
        );
    }
}

export default BurgerBuilder;