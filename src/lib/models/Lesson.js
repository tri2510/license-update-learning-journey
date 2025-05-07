import mongoose from "mongoose";
const Schema = mongoose.Schema;

const LessonSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, limit: 1024 },
    description: { type: String, limit: 4096 },
    lesson_type: { type: String },
    slug: { type: String, required: true, unique: true },
    image: { type: String },
    thumb: { type: String },
    tags: { type: [String] },
    valid_from: { type: Date},
    valid_to: { type: Date},
    state: { type: String, limit: 255, default: 'draft'},   // draft, reviewed, released
    configs: { type: Schema.Types.Mixed },
    extends: { type: Schema.Types.Mixed },
    hiddenContent: { type: Schema.Types.Mixed },
    content: { type: Schema.Types.Mixed },
  },
  { timestamps: true }
);

LessonSchema.index({ slug: 1 });
// LessonSchema.index({ tags: 1 });
LessonSchema.index({ name: 1 });
LessonSchema.index({ state: 1 });


export default mongoose.models.Lesson || mongoose.model("Lesson", LessonSchema);