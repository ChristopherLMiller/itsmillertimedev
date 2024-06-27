import { Combobox, ComboboxOption } from "@strapi/design-system";
import React, { useEffect, useState } from "react";

const Input = React.forwardRef((props, ref) => {
  const { attribute, disabled, name, onChange, value } = props;
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "/api/clockify/projects/5caf9f8ef15c981313dca70c"
      );
      const data = await response.json();
      setProjects(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    onChange({
      target: { name, type: attribute.type, value: e },
    });
  };

  return (
    <Combobox
      label="Project"
      required
      placeholder="Clockify Projects"
      hint="Select the project to associate it"
      disabled={disabled}
      loading={isLoading}
      onChange={handleChange}
      value={value}
    >
      {projects?.map((project) => (
        <ComboboxOption key={project.id} value={project.id}>
          {project.name}
        </ComboboxOption>
      ))}
    </Combobox>
  );
});

export default Input;
