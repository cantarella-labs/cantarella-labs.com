---
title: 'GPUs are not just for AI'
description: 'A proof of concept: a GPU-accelerated soil-water balance model in Julia with KernelAbstractions.jl — the same code running on CPUs and GPUs.'
pubDate: 2025-10-24
author: 'Vitor Cantarella'
tags: ["julia", "gpu", "hydrology", "modeling"]
---

*Originally posted on [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7387406560890605568/).*

GPUs are not just for AI. They can also be very useful for hydrological models.

To show that, I've created a short proof of concept demonstrating how the
[KernelAbstractions.jl](https://github.com/JuliaGPU/KernelAbstractions.jl)
library in the Julia ecosystem can be powerful for writing a GPU-accelerated
soil-water balance model. The same code can be reused on both CPUs and GPUs,
and I can experiment with the GPU in my laptop since there's a compatibility
layer for different GPU vendors.

The proof of concept is on GitHub:
[ArushaRecharge2.0](https://github.com/vcantarella/ArushaRecharge2.0).
