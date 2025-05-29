import mongoose from "mongoose";
const Schema = mongoose.Schema;

const CourseProgressSchema = new mongoose.Schema(
  {
    user_id: { type: Schema.Types.ObjectId },
    course_id: { type: Schema.Types.ObjectId },
    state: { 
      type: String, 
      enum: ['not_started', 'in_progress', 'completed'], 
      default: 'not_started' 
    },
    started_at: { type: Date },
    finished_at: { type: Date },
    data: { type: Schema.Types.Mixed },
    lessons: { type: Schema.Types.Mixed }
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