import Heading from './components/Heading';
import _ from 'lodash';

const heading = new Heading();
heading.render(_.upperFirst('hello world'));
