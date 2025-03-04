import { z } from "zod";

const schema = z.object({
  name: z.string().min(5),
});

export default schema;
