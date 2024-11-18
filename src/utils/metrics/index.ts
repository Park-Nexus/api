import { MetricServiceClient } from "@google-cloud/monitoring";
import { google } from "@google-cloud/monitoring/build/protos/protos";
import dayjs from "dayjs";
import path from "path";

class Metrics {
  static instance: MetricServiceClient;

  static getInstance() {
    if (!Metrics.instance) {
      Metrics.instance = new MetricServiceClient({
        keyFilename: path.join(__dirname, "../../../gc-metrics-key.json"),
      });
    }
    return Metrics.instance;
  }
}

export const metrics = Metrics.getInstance();

// Get Cloud Run API CPU Utilizations -----------------------------------------------------
type TGetCloudRunApiCpuUtilizationsResponse = {
  data: {
    date: string;
    percentage: number;
  }[];
  location: string;
  revision_name: string;
};
export async function getCloudRunApiCpuUtilizations(
  durationInHours: number,
): Promise<TGetCloudRunApiCpuUtilizationsResponse> {
  const projectId = await metrics.getProjectId();

  const request: google.monitoring.v3.IListTimeSeriesRequest = {
    name: `projects/${projectId}`,
    filter: `metric.type = "run.googleapis.com/container/cpu/utilizations" AND
             resource.labels.service_name = "api"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(durationInHours, "hours").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
  };

  try {
    const [timeSeries] = await metrics.listTimeSeries(request);

    const result: TGetCloudRunApiCpuUtilizationsResponse = {
      data: [],
      location: timeSeries?.[0]?.resource?.labels?.location || "",
      revision_name: timeSeries?.[0]?.resource?.labels?.revision_name || "",
    };

    timeSeries.forEach((data) => {
      data.points.forEach((point) => {
        result.data.push({
          date: dayjs.unix(Number(point.interval.endTime.seconds)).format("YYYY-MM-DD HH:mm:ss"),
          percentage: point.value.distributionValue.mean * 100,
        });
      });
    });

    return result;
  } catch (err) {
    console.error("Error querying metrics:", err);
  }
}

// Get Cloud Run API Memory Utilizations ----------------------------------------------------
type TGetCloudRunApiMemoryUtilizationsResponse = {
  data: {
    date: string;
    percentage: number;
  }[];
  location: string;
  revision_name: string;
};
export async function getCloudRunApiMemoryUtilizations(
  durationInHours: number,
): Promise<TGetCloudRunApiMemoryUtilizationsResponse> {
  const projectId = await metrics.getProjectId();

  const request: google.monitoring.v3.IListTimeSeriesRequest = {
    name: `projects/${projectId}`,
    filter: `metric.type = "run.googleapis.com/container/memory/utilizations" AND
             resource.labels.service_name = "api"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(durationInHours, "hours").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
  };

  try {
    const [timeSeries] = await metrics.listTimeSeries(request);

    const result: TGetCloudRunApiMemoryUtilizationsResponse = {
      data: [],
      location: timeSeries?.[0]?.resource?.labels?.location || "",
      revision_name: timeSeries?.[0]?.resource?.labels?.revision_name || "",
    };

    timeSeries.forEach((data) => {
      data.points.forEach((point) => {
        result.data.push({
          date: dayjs.unix(Number(point.interval.endTime.seconds)).format("YYYY-MM-DD HH:mm:ss"),
          percentage: point.value.distributionValue.mean * 100,
        });
      });
    });

    return result;
  } catch (err) {
    console.error("Error querying metrics:", err);
  }
}

// Get Cloud SQL CPU Utilizations --------------------------------------------------------------
type TGetCloudSqlCpuUtilizationsResponse = {
  data: {
    date: string;
    percentage: number;
  }[];
  region: string;
  database_id: string;
  type: string;
};
export async function getCloudSqlCpuUtilizations(
  durationInHours: number,
): Promise<TGetCloudSqlCpuUtilizationsResponse> {
  const projectId = await metrics.getProjectId();

  const request: google.monitoring.v3.IListTimeSeriesRequest = {
    name: `projects/${projectId}`,
    filter: `metric.type = "cloudsql.googleapis.com/database/cpu/utilization" AND
             resource.labels.database_id = "${projectId}:parknexus"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(durationInHours, "hours").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
  };

  try {
    const [timeSeries] = await metrics.listTimeSeries(request);

    const result: TGetCloudSqlCpuUtilizationsResponse = {
      data: [],
      region: timeSeries?.[0]?.resource?.labels?.region || "",
      database_id: timeSeries?.[0]?.resource?.labels?.database_id || "",
      type: timeSeries?.[0]?.resource?.type || "",
    };

    timeSeries.forEach((data) => {
      data.points.forEach((point) => {
        result.data.push({
          date: dayjs.unix(Number(point.interval.endTime.seconds)).format("YYYY-MM-DD HH:mm:ss"),
          percentage: point.value.doubleValue * 100,
        });
      });
    });

    return result;
  } catch (err) {
    console.error("Error querying metrics:", err);
  }
}

// Get Cloud SQL Data IO  ---------------------------------------------------------------------
type TGetCloudSqlDataIo = {
  data: {
    date: string;
    bytesPerSecondIn: number;
    bytesPerSecondOut: number;
  }[];
  region: string;
  database_id: string;
  type: string;
};
export async function getCloudSqlDataIo(durationInHours: number): Promise<TGetCloudSqlDataIo> {
  const projectId = await metrics.getProjectId();

  const inRequest: google.monitoring.v3.IListTimeSeriesRequest = {
    name: `projects/${projectId}`,
    filter: `metric.type = "cloudsql.googleapis.com/database/network/received_bytes_count" AND
                 resource.labels.database_id = "${projectId}:parknexus"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(durationInHours, "hours").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
  };

  const outRequest: google.monitoring.v3.IListTimeSeriesRequest = {
    name: `projects/${projectId}`,
    filter: `metric.type = "cloudsql.googleapis.com/database/network/sent_bytes_count" AND
                     resource.labels.database_id = "${projectId}:parknexus"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(durationInHours, "hours").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
  };

  try {
    const [inTimeSeries] = await metrics.listTimeSeries(inRequest);
    const [outTimeSeries] = await metrics.listTimeSeries(outRequest);

    const result: TGetCloudSqlDataIo = {
      data: [],
      region: inTimeSeries?.[0]?.resource?.labels?.region || "",
      database_id: inTimeSeries?.[0]?.resource?.labels?.database_id || "",
      type: inTimeSeries?.[0]?.resource?.type || "",
    };

    inTimeSeries.forEach((data, index) => {
      data.points.forEach((point) => {
        result.data.push({
          date: dayjs.unix(Number(point.interval.endTime.seconds)).format("YYYY-MM-DD HH:mm:ss"),
          bytesPerSecondIn:
            Number(point.value.int64Value) /
            (Number(point.interval.endTime.seconds) - Number(point.interval.startTime.seconds)),
          bytesPerSecondOut:
            Number(
              outTimeSeries[index].points.find(
                (outPoint) => outPoint.interval.endTime.seconds === point.interval.endTime.seconds,
              ).value.int64Value,
            ) /
            (Number(point.interval.endTime.seconds) - Number(point.interval.startTime.seconds)),
        });
      });
    });

    return result;
  } catch (err) {
    console.error("Error querying metrics:", err);
  }
}

// Get Cloud SQL Storage  ---------------------------------------------------------------------
type TGetCloudSqlStorageUsage = {
  data: {
    date: string;
    bytes: number;
  }[];
  region: string;
  database_id: string;
  type: string;
};
export async function getCloudSqlStorageUsage(
  durationInHours: number,
): Promise<TGetCloudSqlStorageUsage> {
  const projectId = await metrics.getProjectId();

  const request: google.monitoring.v3.IListTimeSeriesRequest = {
    name: `projects/${projectId}`,
    filter: `metric.type = "cloudsql.googleapis.com/database/disk/bytes_used_by_data_type" AND
             resource.labels.database_id = "parknexus-440604:parknexus" AND 
             metric.labels.data_type = "Data"`,
    interval: {
      startTime: {
        seconds: dayjs().subtract(durationInHours, "hours").unix(),
      },
      endTime: {
        seconds: dayjs().unix(),
      },
    },
    aggregation: {
      alignmentPeriod: {
        seconds: 600,
      },
      perSeriesAligner: "ALIGN_MEAN",
    },
  };

  try {
    const [timeSeries] = await metrics.listTimeSeries(request);

    const result: TGetCloudSqlStorageUsage = {
      data: [],
      region: timeSeries?.[0]?.resource?.labels?.region || "",
      database_id: timeSeries?.[0]?.resource?.labels?.database_id || "",
      type: timeSeries?.[0]?.resource?.type || "",
    };

    timeSeries.forEach((data) => {
      data.points.forEach((point) => {
        result.data.push({
          date: dayjs.unix(Number(point.interval.endTime.seconds)).format("YYYY-MM-DD HH:mm:ss"),
          bytes: point.value.doubleValue,
        });
      });
    });

    return result;
  } catch (err) {
    console.error("Error querying metrics:", err);
  }
}
