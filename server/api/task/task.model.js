'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './task.events';

var TaskSchema = new mongoose.Schema({
	title: String,
	body: String,
	milestones: Array
});

registerEvents(TaskSchema);
export default mongoose.model('Task', TaskSchema);
