import React from "react";

import { brown } from "@mui/material/colors";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Filters: React.FC = () => {
  const filters = [
    {
      name: "Сортування",
      options: ["За рейтингом (від високого)", "За популярністю (від високої)"],
    },
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

  return (
    <aside className="filters main__filters">
      <FormGroup>
        {filters.map((filter) => (
          <>
            <Accordion defaultExpanded>
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
          </>
        ))}
      </FormGroup>
    </aside>
  );
};
