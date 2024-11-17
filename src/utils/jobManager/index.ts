class JobManager {
  private static instance: JobManager;
  private runningJobs: Set<string>;

  private constructor() {
    this.runningJobs = new Set();
  }

  static getInstance() {
    if (!JobManager.instance) {
      JobManager.instance = new JobManager();
    }
    return JobManager.instance;
  }

  isJobRunning(jobKey: string): boolean {
    return this.runningJobs.has(jobKey);
  }

  markJobRunning(jobKey: string): void {
    this.runningJobs.add(jobKey);
  }

  markJobCompleted(jobKey: string): void {
    this.runningJobs.delete(jobKey);
  }
}

export const jobManager = JobManager.getInstance();
