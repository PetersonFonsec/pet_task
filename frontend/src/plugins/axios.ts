'use strict';

import { baseURL } from '../global'
import axios from 'axios';

export default axios.create({ baseURL })
