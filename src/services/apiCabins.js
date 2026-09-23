import supabase from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error(error.message);
  }
  return data;
};

export const deleteCabin = async (cabinId) => {
  const { data, error } = await supabase
    .from("cabins")
    .delete()
    .eq("id", cabinId);
  if (error) {
    throw new Error("Cabin could not be deleted. Please try again.");
  }
  return data;
};
