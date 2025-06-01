import mongoose from "mongoose";
const Schema = mongoose.Schema;

import { COURSE_STATES, LESSON_STATES, STATE_NOT_STARTED } from '@/lib/const.js';


const CourseProgressSchema = new mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId },
    course_id: { type: Schema.Types.ObjectId },
    state: {
      type: String,
      enum: COURSE_STATES,
      default: STATE_NOT_STARTED
    },
    started_at: { type: Date },
    finished_at: { type: Date },
    data: { type: Schema.Types.Mixed },
    lessons: {
      type: Map,
      of: {
        state: {
          type: String,
          enum: LESSON_STATES,
          default: STATE_NOT_STARTED
        },
        updated_at: { type: Date },
        started_at: { type: Date },
        finished_at: { type: Date },
        data: { type: Schema.Types.Mixed },
        records: [{
          at: { type: Date },
          action: { type: String },
          refId: { type: String },
          refType: { type: String }
        }]
      }
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

CourseProgressSchema.index({ user_id: 1 });
CourseProgressSchema.index({ course_id: 1 });
CourseProgressSchema.index({ state: 1 });


export default mongoose.models.CourseProgress || mongoose.model("CourseProgress", CourseProgressSchema);