import { supabase } from "../../components/SupabaseForm";

export default async function handler(req, res) {
  const formTable = process.env.NEXT_PUBLIC_CONTACT_TABLE;

  if (req.method === "POST") {
    const body = req.body;

    const { data, error } = await supabase.from(formTable).insert(body);

    if (!error) {
      res.status(200).json(data);
    } else {
      res.status(500).json(error);
    }
  }
}
