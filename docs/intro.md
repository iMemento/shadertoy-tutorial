---
sidebar_position: 1
slug: /
title: 1. 介绍
---

# 写在我们正式开始前

先贴一个我自己写的 [**Shadertoy**](https://www.shadertoy.com/embed/XX3cDr) 是我自己头像的 **Voxel Art Avatar**      
网站至少你应该注册过了吧，Emmm..可以去给我[**点个赞**](https://www.shadertoy.com/embed/XX3cDr)，哈哈 :)
<div style={{ width: '100%', height: 0, paddingBottom: '56.25%', position: 'relative' }}>
  <iframe 
    src="https://www.shadertoy.com/embed/XX3cDr?gui=true&t=10&paused=false&muted=false" 
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: '1px solid #ccc' }}
    frameBorder="1" 
    allowFullScreen
    title="Shadertoy Frame"
  />
</div>

##### 注：本教程翻译自 [**Nathan Vaughn**](https://inspirnathan.com/about) 博客上的 [**Shadertoy 英文教程**](https://inspirnathan.com/posts/47-shadertoy-tutorial-part-1)，有兴趣的可以去观摩学习英文原版。
 
你好！我的朋友，我最近对着色器以及它们的神奇之处着迷。今天，我将讨论如何使用一个名为 [Shadertoy](https://www.shadertoy.com/) 的出色在线工具创建像素着色器，该工具由两位非常有才华的人 [Inigo Quilez](https://www.iquilezles.org/) 和 [Pol Jeremias](http://www.poljeremias.com/) 创建。

## 什么是着色器（Shader）？
[着色器(Shader)](https://en.wikipedia.org/wiki/Shader)是功能强大的程序，最初用于对 3D 场景中的对象进行着色。如今，着色器有多种用途。着色器程序通常在计算机的图形处理单元 （GPU） 上运行，它们可以在其中并行运行。
:::tip tip

了解着色器在 GPU 上并行运行非常重要。你写的程序将同时为 Shadertoy 中的每个像素独立运行。

:::
[高级着色语言 （HLSL）](https://en.wikipedia.org/wiki/High-Level_Shading_Language) 和 [OpenGL 着色语言 （GLSL）](https://en.wikipedia.org/wiki/OpenGL_Shading_Language) 等着色器语言是用于对 GPU 渲染管道进行编程的最常用语言。这些语言的语法类似于 [C 编程语言](https://en.wikipedia.org/wiki/C_(programming_language))。

当您玩 Minecraft 等游戏时，着色器用于使世界看起来是 3D，因为你从 2D 屏幕（即计算机显示器或手机屏幕）查看世界。着色器还可以通过调整光线与对象的交互方式或对象在屏幕上的渲染方式来彻底改变游戏的外观。此 [YouTube 视频](https://www.youtube.com/watch?v=1BnNAu_L4FA)展示了 10 个着色器，它们可以使 Minecraft 看起来完全不同并展示着色器的美感。


通常我们会看到着色器有两种形式：顶点着色器（vertex shaders）和片段着色器（fragment shaders）。顶点着色器用于创建各种对象的 3D 网格的顶点，例如球体、立方体、大象、3D 游戏的主角等。来自顶点着色器的信息将传递给几何着色器（geometry shaders），然后几何着色器可以在片段着色器之前操作这些顶点或执行额外操作。你通常不会听到太多关于几何着色器的讨论。管道的最后一部分是片段着色器。片段着色器计算像素的最终颜色，并确定是否应向用户显示像素。


<p align="center">![-](./img/img-1.png)</p>
<p align="center">[Learn OpenGL](https://learnopengl.com/Getting-started/Hello-Triangle) 提供的管线渲染阶段</p>


例如，假设我们有一个顶点着色器，它以三角形的形式在屏幕上绘制三个点/顶点。一旦这些顶点传递到片段着色器，就可以自动填充每个顶点之间的像素颜色。GPU 非常了解如何**插值**。假设为顶点着色器中的每个顶点分配了颜色，则 GPU 可以在每个顶点之间插入颜色以填充三角形。

<p align="center">![-](./img/img-2.png)</p>

在 **Unity** 或 **Unreal** 等游戏引擎中，顶点着色器和片段着色器大量用于 3D 游戏。Unity 在着色器之上提供了一个称为 ShaderLab 的抽象，这是一种位于 HLSL 之上的语言，可帮助您更轻松地为游戏编写着色器。此外，Unity 还提供了一个名为 **Shader Graph** 的可视化工具，让您无需编写代码即可构建着色器。如果您在 Google 上搜索“Unity 着色器”，您会发现数百个执行许多不同功能的着色器。您可以创建着色器，使对象发光，使角色变得半透明，甚至创建将着色器应用于游戏整个视图的“图像效果”。可以使用着色器的方式有无数种。


你可能经常听到片段着色器被称为**像素着色器（pixel shaders）**。大多情况下术语“**片段着色器（ragment shader）**”更准确。而在某些应用程序（如 Shadertoy）中，需要将每个像素绘制到屏幕上，因此在该上下文中称它们为像素着色器貌似更有道理。


着色器还负责渲染游戏中的着色和光照，但它们的用途远不止于此。着色器程序可以在 GPU 上运行，那么为什么不利用它提供的并行化呢？您可以创建一个**计算着色器（compute shader）**，在 GPU 而不是 CPU 中运行大量计算。事实上，**Tensorflow.js** 利用 GPU 在浏览器中更快地训练机器学习模型。


## 什么是 Shadertoy？

在接下来的系列文章中，我将讨论 Shadertoy。Shadertoy 是一个帮助用户创建像素着色器并与他人共享的网站，类似于带有 HTML、CSS 和 JavaScript 的 **Codepen**。
:::tip tip

在学习本教程时，请确保您使用的是支持 WebGL 2.0 的现代浏览器，例如 Google Chrome。

:::

Shadertoy 利用 **WebGL API** 使用 GPU 在浏览器中渲染图形。WebGL 允许你在 GLSL 中编写着色器并支持硬件加速。也就是说，您可以利用 GPU 并行处理屏幕上的像素，以加快渲染速度。还记得在使用 **HTML Canvas API** 时必须使用 ctx.getContext（'2d'） 吗？Shadertoy 使用具有 webgl 上下文的画布而不是 2d，因此可以使用 WebGL 以更高的性能将像素绘制到屏幕上。
:::warning warning

尽管 Shadertoy 使用 GPU 来帮助提高渲染性能，但在打开执行大量计算的某人的 Shadertoy 着色器时，您的计算机速度可能会稍慢。请确保您计算机的 GPU 可以处理它，并了解它可能会很快耗尽设备的电池。

:::

现代 3D 游戏引擎（如 Unity 和 Unreal Engine）以及 3D 建模软件（如 Blender）运行速度非常快，因为它们同时使用顶点和片段着色器，并且可以为您执行大量优化。在 Shadertoy 中，你**无权访问顶点着色器**。您必须依靠**光线行进（Ray Marching）** 和 **符号距离场/函数 （SDF）** 等算法来渲染 3D 场景，这在计算上可能很昂贵。


请注意，在 Shadertoy 中编写着色器并不能保证它们可以在其他环境（如 Unity）中工作。您可能必须将 GLSL 代码转换为目标环境支持的语法，例如 HLSL。Shadertoy 还提供了在其他环境中可能不支持的全局变量。不过，不要让它阻止你！完全可以调整 Shadertoy 代码并在游戏或建模软件中使用它们。它只需要一些额外的工作。事实上，Shadertoy 是在首选游戏引擎或建模软件中使用着色器之前对其进行试验的好方法。


Shadertoy 是练习使用 GLSL 创建着色器的好方法，可帮助您更数学地思考。绘制 3D 场景需要大量的矢量运算。这在智力上是刺激性的，是向朋友炫耀您的技能的好方法。如果您浏览 Shadertoy，你会看到大量仅用数学和代码绘制的精美作品！一旦你掌握了 Shadertoy 的窍门，你就会发现它真的非常有趣！