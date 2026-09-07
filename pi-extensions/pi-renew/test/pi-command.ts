/**
 * Resolve the Pi launcher for child-process tests.
 *
 * npm installs a `.cmd` shim on Windows, while POSIX environments expose the
 * executable as `pi`. CI or a custom installation can override the command
 * explicitly with PI_RENEW_PI_BIN.
 */
export const PI_COMMAND =
  process.env.PI_RENEW_PI_BIN || (process.platform === "win32" ? "pi.cmd" : "pi");

/** `spawn` needs the Windows shell to execute npm's `.cmd` launcher shim. */
export const PI_SPAWN_SHELL =
  process.platform === "win32" && PI_COMMAND.toLowerCase().endsWith(".cmd");
