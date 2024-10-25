"use client";

import { Container } from "../../components/Container";

export default function License() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <main className="flex flex-col w-full min-h-[calc(100vh-80px)] items-center justify-center px-6 py-10 bg-gray-50">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl font-bold mb-4">MIT License</h1>
          <h2 className="text-lg font-medium mb-8 text-gray-600">
            Copyright © {year} <span className="text-blue-600">TimerDev</span>
          </h2>

          <div className="text-left space-y-6 text-gray-700 leading-relaxed">
            <p>
              Permission is hereby granted, free of charge, to any person
              obtaining a copy of this software and associated documentation
              files (the "Software"), to deal in the Software without
              restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies
              of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>

            <p>
              The above copyright notice and this permission notice shall be
              included in all copies or substantial portions of the Software.
            </p>

            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
              EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
              NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
              HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
              WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
              DEALINGS IN THE SOFTWARE.
            </p>
          </div>
        </div>
      </main>
    </Container>
  );
}
