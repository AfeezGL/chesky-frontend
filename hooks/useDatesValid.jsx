import { useEffect, useState } from 'react';

const useDatesValid = (pickupDateTime, dropOffDateTime) => {
  const [datesValid, setDatesValid] = useState(false);

  function dateGreaterThanNow(date) {
    return new Date(date).getTime() >= new Date().getTime();
  }

  useEffect(() => {
    if (
      dateGreaterThanNow(pickupDateTime) &&
      dateGreaterThanNow(dropOffDateTime)
    ) {
      setDatesValid(true);
    } else {
      setDatesValid(false);
    }
  }, [pickupDateTime, dropOffDateTime]);

  return [datesValid];
};

export default useDatesValid;
