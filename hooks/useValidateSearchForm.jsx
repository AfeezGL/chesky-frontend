import { useEffect, useState } from 'react';

function dateGreaterThanNow(date) {
  return new Date(date).getTime() >= new Date().getTime();
}

const useValidateSearchForm = ({ pickupDateTime, dropOffDateTime }) => {
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (
      dateGreaterThanNow(pickupDateTime) &&
      dateGreaterThanNow(dropOffDateTime)
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [pickupDateTime, dropOffDateTime]);

  return [formValid];
};

export default useValidateSearchForm;
