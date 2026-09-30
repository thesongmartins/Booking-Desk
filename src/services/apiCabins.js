import supabase from "./supabase";

export const getCabins = async () => {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.error("Error fetching cabins:", error);
    throw new Error(error.message);
  }
  return data;
};
export const createCabin = async (newCabin) => {
  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    throw new Error("Cabin could not be created. Please try again later");
  }
  return data;
};

export const updateCabin = async () => {
  const { data, error } = await supabase
    .from("cabins")
    .update({ other_column: "otherValue" })
    .eq("some_column", "someValue")
    .select();

  if (error) {
    throw new Error("Cabin could not be updated. Please try again later.");
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
