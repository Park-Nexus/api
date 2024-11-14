export namespace DateUtils {
  export const toCronDate = (data: Date) => {
    // to cron date, includes seconds
    /*
          # ┌────────────── second (optional)
          # │ ┌──────────── minute
          # │ │ ┌────────── hour
          # │ │ │ ┌──────── day of month
          # │ │ │ │ ┌────── month
          # │ │ │ │ │ ┌──── day of week
          # │ │ │ │ │ │
          # │ │ │ │ │ │
          # * * * * * *
          */

    return `${data.getSeconds()} ${data.getMinutes()} ${data.getHours()} ${data.getDate()} ${data.getMonth() + 1} *`;
  };
}
