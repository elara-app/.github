![Alt text](../images/complete-logo.png "a title")
# 🍜 Welcome to Elara

**Elara** is a personal project turned into a professional-grade solution — an application designed to simplify and optimize operations in **restaurants, gastrobars, and restobars**. Built with passion by a **Systems Engineering student and software development enthusiast** ([@julianbetov](https://github.com/julianbetov)), Elara combines practical business logic with clean backend architecture.

---

## 🍚 What Elara Does

> All-in-one system to help modern food businesses manage their backend operations with clarity and control.

Elara  allows for efficient management of users and roles, inventory and stock levels, product catalogs with variants, recipe creation based on ingredients, and order tracking. Additionally, it provides tools for logging business activities and monitoring financial data, including income and expenses — offering full visibility and control over daily operations.

---

## 👩‍🚀 Our Progress
> Note: This section is constantly improving, stay tuned for new things we're working on.

> (List of repositories that make Elera possible)
<!-- COMMITS-TABLE:START -->
| Repository | Branch | Commit | Date (UTC) | Message | Author |
| --- | --- | --- | --- | --- | --- |
| [demo-repository](https://github.com/elara-app/demo-repository) | `test-branch` | [6bc3cad](https://github.com/elara-app/demo-repository/commit/6bc3cad5532e9f2caeda50d80fc76ebd09af0feb) | 6/14/2025, 8:45:23 PM | New commit | [julianbetov](https://github.com/julianbetov) |
| [.github](https://github.com/elara-app/.github) | `main` | [e4b1cbc](https://github.com/elara-app/.github/commit/e4b1cbcf128acf3a790cf8d51a4d349ebfe94ff5) | 12/18/2025, 2:11:41 PM | Update commits table in README | [readme-updater-from-elara[bot]](https://github.com/apps/readme-updater-from-elara) |
| [config-service](https://github.com/elara-app/config-service) | `develop` | [fec63b4](https://github.com/elara-app/config-service/commit/fec63b4e8478c4e5c5efb4e803ef10fc925f3145) | 11/1/2025, 10:10:02 PM | feat(config): update application.yml for server port and active profile | [julianbetov](https://github.com/julianbetov) |
| [centralized-configuration](https://github.com/elara-app/centralized-configuration) | `main` | [6a42c05](https://github.com/elara-app/centralized-configuration/commit/6a42c05098a3130efba22d9c923a259f099aa939) | 11/21/2025, 12:51:57 AM | Revert instance-id configuration to use random.uuid in Inventory and UoM service development profiles | [julianbetov](https://github.com/julianbetov) |
| [api-gateway](https://github.com/elara-app/api-gateway) | `feature/initial-setup` | [e9b72b5](https://github.com/elara-app/api-gateway/commit/e9b72b5d8aaa3d877e48ce68a22e9f90d7f1a8a7) | 11/2/2025, 11:31:43 PM | feat(pom): add Spring WebFlux and Spring Cloud dependencies to pom.xml | [julianbetov](https://github.com/julianbetov) |

_Last updated: 12/18/2025, 3:10:47 PM_
<!-- COMMITS-TABLE:END -->
---

## 🔨 How are we creating Elara?
- The table above is a production-ready automation tool for keeping a section of a GitHub organization's README synchronized with the live repository's data, using modern Node.js, the GitHub API, and software engineering best practices. [See code here](https://github.com/elara-app/.github/tree/main/src). 
    
    **Key points:**
    - Separation of concerns y modularity.
    - professional GitHub App authentication (Uses GitHub App installation authentication, not a personal token).
    - Dynamic Data Fetching.
    - Markdown Table Rendering.
    - Safe, targeted README updates.
    - Direct GitHub integration.
    - Robust logging & Error handling.

### 🧑‍💻 Development of other services
The Elara's backend is developed with a decoupled **microservices architecture**, each with its own **PostgreSQL database**, asynchronous communication via **Kafka** or **RabbitMQ**, centralized configuration with **Spring Cloud Config Server**, and exposure through an **API Gateway**. It is containerized with **Docker**, orchestrated with **Kubernetes**, and automated with **GitHub Actions** under a **Git Flow**, enabling **professional CI/CD**, **horizontal scalability**, and **cloud deployment** (AWS, Azure, or GCP). It includes **OAuth2 and JWT authentication**, robust validations, centralized error handling, structured logging, and automatic documentation with **Swagger**. And more.

Its design allows it to support **high traffic**, **guarantee security** and **availability**, and facilitate **system maintenance** and **evolution**. It is ideal for medium-sized or large companies that need a solid, scalable, production-ready foundation, or for startups looking for a modern architecture ready to grow without rewriting from scratch.

> Note: This document currently shows the entire development process of the elara application (we are still working on it): [Creating Elara App - Development Software](https://docs.google.com/document/d/1eJTg3-qAXy3PJtfzBTZdcgy597JHPAEZ2ok6tBuj8Co/edit?usp=sharing)