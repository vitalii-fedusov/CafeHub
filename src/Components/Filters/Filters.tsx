import React from "react";

import { brown } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useSearchParams } from "react-router-dom";

export const Filters: React.FC = () => {
  const filters = [
    // {
    //   name: "Сортування",
    //   options: ["За рейтингом (від високого)", "За популярністю (від високої)"],
    // },
    {
      name: "Кухня",
      options: [
        "Українська",
        "Європейська",
        "Авторська",
        "Здорова їжа",
        "Смачна випічка та кава",
        "Піца",
        "Fast food",
      ],
    },
    {
      name: "Послуги",
      options: [
        "Pet Friendly",
        "Бізнес-ланчі",
        "Авторська",
        "Настільні ігри",
        "Коворкінг",
      ],
    },
    {
      name: "Привід",
      options: [
        "День народження",
        "Ділова зустріч",
        "Дитяче свято",
        "Романтична вечеря",
        "Тематичний вечір",
        "Сімейне свято",
      ],
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "rating";

  const toggleSortBy = (newValue: string) => {
    setSearchParams((prev) => {
      const newParams = new URLSearchParams(prev.toString());

      if (newParams.get('sortBy') === newValue) {
        return newParams;
      }

      newParams.set('sortBy', newValue);

      return newParams;
    });
  };

  return (
    <aside className="filters main__filters">
      <FormControl>
        <FormLabel
          id="demo-controlled-radio-buttons-group"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontSize: "22px",
            "&.Mui-focused": {
              color: brown[600],
            },
          }}
        >
          Сортування:
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={sortBy}
          onChange={(event) => toggleSortBy(event.target.value)}
          sx={{
            color: brown[800],
            "&.Mui-checked": {
              color: brown[600],
            },
            "& .MuiSvgIcon-root": { fontSize: 24 },
          }}
        >
          <FormControlLabel
            value="rating"
            control={<Radio />}
            label="За рейтингом (від високого)"
            sx={{
              color: brown[800],
              ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
                color: brown[600],
              },
            }}
          />
          <FormControlLabel
            value="popularity"
            control={<Radio />}
            label="За популярністю (від високої)"
            sx={{
              color: brown[800],
              ".css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked": {
                color: brown[600],
              },
            }}
          />
        </RadioGroup>
      </FormControl>

      <FormGroup>
        {filters.map((filter) => (
          <Accordion defaultExpanded key={filter.name}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h2 className="filters__title">{`${filter.name}:`}</h2>
            </AccordionSummary>
            <AccordionDetails>
              {filter.options.map((option) => (
                <FormControlLabel
                  key={option}
                  control={
                    // eslint-disable-next-line
                    <Checkbox
                      sx={{
                        color: brown[800],
                        "&.Mui-checked": {
                          color: brown[600],
                        },
                        "& .MuiSvgIcon-root": { fontSize: 24 },
                      }}
                    />
                  }
                  label={option}
                />
              ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </FormGroup>
    </aside>
  );
};
