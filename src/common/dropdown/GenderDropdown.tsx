import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const options = ["Male" , "Female" , "Others" , "Prefer not to say"];

const GenderDropdown = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
    <div className="form-clt relative">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <ListboxButton className="w-full bg-white rounded-md py-3 px-4 text-left text-[#555] text-[16px] flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary">
            {selected || "Select Gender"}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </ListboxButton>

          <ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg z-10 border border-[#D9D9D9]">
            {options.map((option, idx) => (
              <ListboxOption
                key={idx}
                value={option}
                className={({ active, selected }) =>
                  `cursor-pointer select-none px-4 py-2 text-sm ${
                    active ? "bg-gray-100" : ""
                  } ${selected ? "font-semibold text-black" : "text-gray-700"}`
                }
              >
                {option}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  </div>
  )
}

export default GenderDropdown
