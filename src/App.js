import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import './App.css';


    const useStyles = makeStyles((theme) => ({
      root: {
        
      },
      margin: {
        height: theme.spacing(3),
      },
    }));
    
    function ValueLabelComponent(props) {
      const { children, open, value } = props;
    
      return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
          {children}
        </Tooltip>
      );
    }
    
    ValueLabelComponent.propTypes = {
      children: PropTypes.element.isRequired,
      open: PropTypes.bool.isRequired,
      value: PropTypes.number.isRequired,
    };
    
    
    const PrettoSlider = withStyles({
      root: {
        color: '#60a1c7',
        height: 8,
      },
      thumb: {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        marginTop: -8,
        marginLeft: -12,
        '&:focus, &:hover, &$active': {
          boxShadow: 'inherit',
        },
      },
      active: {},
      valueLabel: {
        left: 'calc(-50% + 4px)',
      },
      track: {
        height: 8,
        borderRadius: 4,
      },
      rail: {
        height: 8,
        borderRadius: 4,
      },
    })(Slider);

const App = () =>{
      const classes = useStyles();

      const [value, setValue] = React.useState(20);

      const handleSliderChange = (event, newValue) => {
        setValue(newValue);
        console.log(newValue);
      };

      return (
        <>
          <div>
            <div className="image_box"> 
              <div className="image_box_div_1">Leading made easy</div>
              <div className="image_box_div_2">Earn up to -1.16% a year across a wide range of P2P sites with investUP</div>
              <button className="image_box_button_1">GET STARTED</button>
            </div>
            <div className="parent_calculation">
              <div className="calculation">
      With <span className="slideValue">${value}</span> your estimated earning could be <span className="earning">$-212.28</span> * per year withfees of just <span className="fees">-$21.23</span> per year
              </div>
              <p>Estimated earnings are based on -1.16% per anum before tax and any potential losses. As with most forms of investment
                 , peer-to-peer lending carries a degree of risk to your capital; in thi case, if borrowers were unable to repay their loans.
              </p>
              <div className="slider">
              <div className={classes.root}>
                <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange} />
                <div className={classes.margin} />
              </div>

              </div>
            </div>
          </div>
        </>
      )
    
}

export default App;
