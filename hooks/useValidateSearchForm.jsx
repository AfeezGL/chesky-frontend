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
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      !!country_code &&
      !!pickupLocation &&
      dateGreaterThanNow(pickupDateTime) &&
      dateGreaterThanNow(dropOffDateTime)
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [country_code, pickupLocation, pickupDateTime, dropOffDateTime]);

  return [formValid];
};

export default useValidateSearchForm;
