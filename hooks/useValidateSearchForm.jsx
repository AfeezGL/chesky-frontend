import { useEffect, useState } from 'react';

function dateGreaterThanNow(date) {
  return new Date(date).getTime() >= new Date().getTime();
}

const useValidateSearchForm = ({
  country_code,
  pickupLocation,
  pickupDateTime,
  dropOffDateTime,
}) => {
  const [datesValid, setDatesValid] = useState(false);

  useEffect(() => {
    if (
      !!country_code &&
      !!pickupLocation &&
      dateGreaterThanNow(pickupDateTime) &&
      dateGreaterThanNow(dropOffDateTime)
    ) {
      setDatesValid(true);
    } else {
      setDatesValid(false);
    }
  }, [country_code, pickupLocation, pickupDateTime, dropOffDateTime]);

  return [datesValid];
};

export default useValidateSearchForm;
