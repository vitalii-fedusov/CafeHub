import React from 'react';

import { brown } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const Filters: React.FC = () => {
  const filters = [
    {
      name: 'Сортування',
      options: [
        'За рейтингом (від високого)',
        'За популярністю (від високої)',
      ],
    },
    {
      name: 'Кухня',
      options: [
        'Українська',
        'Європейська',
        'Авторська',
        'Здорова їжа',
        'Смачна випічка та кава',
        'Піца',
        'Fast food',
      ],
    },
    {
      name: 'Послуги',
      options: [
        'Pet Friendly',
        'Бізнес-ланчі',
        'Авторська',
        'Настільні ігри',
        'Коворкінг',
      ],
    },
    {
      name: 'Привід',
      options: [
        'День народження',
        'Ділова зустріч',
        'Дитяче свято',
        'Романтична вечеря',
        'Тематичний вечір',
        'Сімейне свято',
      ],
    },
  ];

  return (
    <aside className="filters main__filters">
      <FormGroup>
        {filters.map(filter => (
          <>
            <h2>{`${filter.name}:`}</h2>

            {filter.options.map(option => (
              <FormControlLabel
                key={option}
                control={
                  // eslint-disable-next-line
                  <Checkbox
                    sx={{
                      color: brown[800],
                      '&.Mui-checked': {
                        color: brown[600],
                      },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                    }}
                  />
                }
                label={option}
              />
            ))}
          </>
        ))}
      </FormGroup>
    </aside>
  );
};
