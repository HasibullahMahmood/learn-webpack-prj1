import Heading from './components/Heading';
import OrangeImage from './components/OrangeImage';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('fruit'));
const orange = new OrangeImage();
orange.render();
